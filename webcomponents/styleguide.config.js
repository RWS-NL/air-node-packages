// @ts-check

const path = require('path');
const glob = require('glob');
const fs = require('fs');

const parserOptions = {
    propFilter: {
        skipPropsWithoutDoc: false
    }
}

module.exports = {
    components: function () {
        return glob.sync(path.resolve(__dirname, 'src/**/*.tsx'))
            .filter(function (module) {
                return /\/[A-Z]\w*\.tsx$/.test(module);
            });
    },
    resolver: require('react-docgen').resolver.findAllComponentDefinitions,
    propsParser: require('react-docgen-typescript').withDefaultConfig(parserOptions).parse,
    updateExample(props, exampleFilePath) {
        const { settings, lang } = props
        if (typeof settings.file === 'string') {
            const filepath = path.resolve(exampleFilePath, settings.file)
            settings.static = true
            delete settings.file
            return {
                content: fs.readFileSync(filepath, 'utf8'),
                settings,
                lang
            }
        }
        return props
    }
}