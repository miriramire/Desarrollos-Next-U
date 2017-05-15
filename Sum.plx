language: perl
perl:
  - "5.8"
  - "5.8.4"
  - "5.8.4-thr"
  - "5.12.2"
  - "5.20"
  - "dev"
  - "blead"
matrix:
  include:
    - perl: 5.18
      env: COVERAGE=1
  allow_failures:
    - perl: "blead"
sudo: false
before_install:
  - git clone git://github.com/travis-perl/helpers ~/travis-perl-helpers
  - source ~/travis-perl-helpers/init
  - build-perl
  - perl -V
  - build-dist
  - cd $BUILD_DIR             # $BUILD_DIR is set by the build-dist command
install:
  - cpan-install --deps       # installs prereqs, including recommends
  - cpan-install --coverage   # installs converage prereqs, if enabled
before_script:
  - coverage-setup
script:
  - prove -l -j$(test-jobs) $(test-files)   # parallel testing
after_success:
  - coverage-report
