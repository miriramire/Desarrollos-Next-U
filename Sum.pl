language: perl
#!/usr/bin/perl
# your code goes here
use warnings;
use Data::Dumper qw(Dumper);
$array = <>;
my @chars = split / /, $array;
$a = @chars[0];
$b = @chars[1];
print $a + $b;
