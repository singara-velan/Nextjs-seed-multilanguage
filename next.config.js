
module.exports  = {
    i18n: {
        locales: ['en-IN', 'hi-IN', 'kn-IN'],
        defaultLocale: 'en-IN'
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          },
        ]
    }
}