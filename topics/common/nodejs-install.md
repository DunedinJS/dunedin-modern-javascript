# Installing Node.js on Linux/Unix/macOS

It is recommended to use [NVM (Node.js Version Manager)](https://github.com/creationix/nvm) to install and manage Node.js versions on Linux,Unix, and macOS.

1. Follow the [NVM installation instructions](https://github.com/creationix/nvm#installation).
1. Install the latest Node.js Long-Term-Support release `nvm install --lts`
1. Verify the installed Node.js version `node -v`

## For building native C++ extensions -- recommended

Linux/Unix:
* `python` v2.7 (v3 is __*not*__ supported)
* `make`
* A proper C/C++ compiler toolchain, like [GCC](https://gcc.gnu.org)
  
macOS:
* `python` v2.7 -- already installed on macOS (v3 is __*not*__ supported)
* [Xcode](https://developer.apple.com/xcode/download/) (sorry, it's a huge download!)
* You also need to install the `Command Line Tools` via Xcode. You can find this under the menu `Xcode -> Preferences -> Downloads`  
This step will install `gcc` and the related toolchain containing `make`

Verify that the environment is setup correctly by attempting `npm i -g bson`

# Installing Node.js on Windows

_It's preferable to use Linux/Unix/macOS because there is greater community support. To help bridge this gap, Git Bash should be used._

It is recommended to use [Nodist](https://github.com/marcelklehr/nodist) to install and manage Node.js versions on Windows.

1. Follow the [Nodist installation instructions](https://github.com/marcelklehr/nodist#installation)
1. Install the latest Node.js Long-Term-Support release (version 6.9 as of December 2016) `nodist + 6.x`
1. Verify the installed Node.js version `node -v`

## For building native C++ extensions -- recommended

Use [Windows-Build-Tools](https://github.com/felixrieseberg/windows-build-tools).  
This sets up the correct Python and C++ build tools.

1. Run `npm i -g windows-build-tools`
1. Verify that the environment is setup correctly by attempting `npm i -g bson`

If the above does not work consult the [Configuring your Windows development environment](https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#environment-setup-and-configuration) section of the Microsoft + Node.js Guidelines.
