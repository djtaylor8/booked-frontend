async function auditions(parent, args, context, info) {
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
  
    return auditions
  }

module.exports = {
    auditions
}