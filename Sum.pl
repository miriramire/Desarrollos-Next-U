language: perl
perl:
  - "5.14"
matrix:
  include:
    - perl: 5.14
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
#!/usr/bin/perl
# your code goes here
use warnings;
use Data::Dumper qw(Dumper);
$array = <>;
my @chars = split / /, $array;
$a = @chars[0];
$b = @chars[1];
print $a + $b;
after_success:
  - coverage-report
