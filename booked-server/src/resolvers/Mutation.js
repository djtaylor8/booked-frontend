const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserId } = require('../utils');

async function signup(parent, args, context, info) {
    const password = await bcrypt.hash(args.password, 10);
    const user = await context.prisma.user.create({ data: { ...args, password } })
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
    return {
        token,
        user
    }
}

async function login(parent, args, context, info) {
    const user = await context.prisma.user.findUnique({ where: { email: args.email } })
    if (!user) {
        throw new Error('No such user found')
    }
    const token = jwt.sign({ userId: user.id }, APP_SECRET)

    return {
        token,
        user,
    }
}

async function post(parent, args, context, info) {
    const { userId } = context;

    const newAudition = await context.prisma.audition.create({
        data: {
            location: args.location,
            description: args.description,
            createdBy: { connect: { id: userId } },
        }
    })
    context.pubsub.publish("NEW_AUDITION", newAudition)
    return newAudition
}

module.exports = {
    signup,
    login,
    post,
}