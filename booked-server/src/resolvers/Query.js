async function feed(parent, args, context, info) {
    const where = args.filter
      ? {
        OR: [
          { description: { contains: args.filter } },
          { location: { contains: args.filter } },
        ],
      }
      : {}
  
    const auditions = await context.prisma.audition.findMany({
      where,
      orderBy: args.orderBy,
    })
    const count = await context.prisma.audition.count({ where })
  
    return {
        id: 'main-feed',
        auditions,
        count
    }
  }

module.exports = {
    feed
}