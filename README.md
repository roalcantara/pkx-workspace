# Pdx-Workspace

Yet another [Nx][6] monorepo

[![MIT license](https://img.shields.io/badge/License-MIT-brightgreen.svg?style=flat-square)](LICENSE) [![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.0-4baaaa.svg?style=flat-square)][2] [![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)][4] [![Editor Config](https://img.shields.io/badge/Editor%20Config-1.0.1-crimson.svg?style=flat-square)][3]

## Install

```sh
git clone https://github.com/roalcantara/pdx-workspace
```

### Dependencies

- [git][5]

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

## Contributing

- Bug reports and pull requests are welcome on [GitHub][0]
- Do follow [Editor Config][3] rules.
- Everyone interacting in the project’s codebases, issue trackers, chat rooms and mailing lists is expected to follow the [Contributor Covenant][2] code of conduct.

## License

The project is available as open source under the terms of the [MIT][1] [License](LICENSE)

[0]: https://github.com/roalcantara/pdx-workspace 'pdx-workspace'
[1]: https://opensource.org/licenses/MIT 'Open Source Initiative'
[2]: https://contributor-covenant.org 'A Code of Conduct for Open Source Communities'
[3]: https://editorconfig.org 'EditorConfig'
[4]: https://github.com/RichardLitt/standard-readme 'Standard Readme'
[5]: https://git-scm.com 'Git'
[6]: https://nx.dev 'Smart, Fast Extensible Build System'
