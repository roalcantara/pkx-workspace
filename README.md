# pkx-workspace

![Build](https://github.com/roalcantara/pkx-workspace/actions/workflows/build.yml/badge.svg)

Yet another [Nx][6] monorepo

[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square)](LICENSE) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg?style=flat-square)][2] [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)][4] [![Editor Config](https://img.shields.io/badge/Editor%20Config-1.0.1-crimson.svg?style=flat-square)][3] [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)][9]

## Install

```sh
git clone https://github.com/roalcantara/pkx-workspace
```

### Dependencies

- [git][5]
- [pre-commit][7]
- [gitlint][8]

## Usage

```sh
# run eslint
npx nx lint app

# run jest tests
npx nx test app

# run cypress tests
npx nx e2e app-e2e

# build the application to `dist/` directory
npx nx build app

# start the development server at http://localhost:4200
npx nx serve app

# check files formatting
npx nx format:check

# format files
npx nx format:write
```

## Acknowledgements

- [Standard Readme][4]
- [Conventional Commits][9]

## Contributing

- Bug reports and pull requests are welcome on [GitHub][0]
- Do follow [Editor Config][3] rules.
- Do follow [Git lint][8] rules
- Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [Contributor Covenant][2] code of conduct.

## License

The project is available as open source under the terms of the [MIT][1] [License](LICENSE)

[0]: https://github.com/roalcantara/pkx-workspace 'pkx-workspace'
[1]: https://opensource.org/licenses/MIT 'Open Source Initiative'
[2]: https://contributor-covenant.org 'A Code of Conduct for Open Source Communities'
[3]: https://editorconfig.org 'EditorConfig'
[4]: https://github.com/RichardLitt/standard-readme 'Standard Readme'
[5]: https://git-scm.com 'Git'
[6]: https://nx.dev 'Smart, Fast Extensible Build System'
[7]: https://pre-commit.com 'A framework for managing and maintaining multi-language pre-commit hooks'
[8]: https://jorisroovers.com/gitlint 'git commit message linter'
[9]: https://conventionalcommits.org 'Conventional Commits'