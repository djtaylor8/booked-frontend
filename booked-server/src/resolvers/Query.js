async function auditions(parent, args, context, info) {
    const where = args.filter
      ? {
        OR: [
          { description: { contains: args.filter } },
          { location: { contains: args.filter } },
        ],
      }
      : {}
  
    const links = await context.prisma.audition.findMany({
      where,
    })
  
    return links
  }

module.exports = {
    auditions
}