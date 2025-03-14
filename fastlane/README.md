fastlane documentation
----

# Installation

Make sure you have the latest version of the Xcode command line tools installed:

```sh
xcode-select --install
```

For _fastlane_ installation instructions, see [Installing _fastlane_](https://docs.fastlane.tools/#installing-fastlane)

# Available Actions

## iOS

### ios build_and_upload

```sh
[bundle exec] fastlane ios build_and_upload
```

Build IPA application and upload to App Center.

### ios build

```sh
[bundle exec] fastlane ios build
```

Build IPA application

### ios upload_appcenter

```sh
[bundle exec] fastlane ios upload_appcenter
```

Upload to App Center.

----


## Android

### android build_and_upload

```sh
[bundle exec] fastlane android build_and_upload
```

Build APK application and upload to App Center.

### android build

```sh
[bundle exec] fastlane android build
```

Build APK application

### android upload_appcenter

```sh
[bundle exec] fastlane android upload_appcenter
```

Upload to App Center.

----

This README.md is auto-generated and will be re-generated every time [_fastlane_](https://fastlane.tools) is run.

More information about _fastlane_ can be found on [fastlane.tools](https://fastlane.tools).

The documentation of _fastlane_ can be found on [docs.fastlane.tools](https://docs.fastlane.tools).
