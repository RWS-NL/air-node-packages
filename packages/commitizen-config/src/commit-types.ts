export default {
  types: {
    build: {
      description: 'For commits that change the build configuration',
      title: 'Builds'
    },
    chore: {
      description: 'For chore commits that do not change code or documentation',
      title: 'Chores'
    },
    ci: {
      description: 'For commits that change the CI/CD flow',
      title: 'Continuous Integrations / Continuous Deployment'
    },
    dependencies: {
      description: 'For commits that change or upgrade dependencies',
      title: 'Dependencies'
    },
    docs: {
      description: 'For commits that change documentation',
      title: 'Documentation'
    },
    feat: {
      description: 'For commits that change the build configuration',
      title: 'Features'
    },
    fix: {
      description: 'For commits that fix bugs',
      title: 'Bug Fixes'
    },
    misc: {
      description: 'For commits that do not match any of the other types',
      title: 'Miscellaneous'
    },
    refactor: {
      description: 'For commits that refactor existing code',
      title: 'Code Refactoring'
    },
    revert: {
      description: 'For commits that revert previous commits',
      title: 'Reverts'
    },
    style: {
      description:
        'For commits that exclusively change the style of the code, such as indents, linting, and auto-formatting',
      title: 'Styling'
    },
    test: {
      description: 'For commits that change test code',
      title: 'Tests'
    },
    wip: {
      description:
        'For commits that add work-in-progress code, should never be used on the master branch but can be used on non-master branches',
      title: 'WIP'
    }
  }
};
