module.exports = {
    components: 'src/**/[A-Z]*.tsx',
    propsParser: require('react-docgen-typescript').withDefaultConfig().parse
}