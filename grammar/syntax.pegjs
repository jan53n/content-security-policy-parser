Policy = Directive (AsciiWhiteSpace ";" (Directive AsciiWhiteSpace)?)*;

Directive = DirectiveName (RequiredAsciiWhiteSpace DirectiveValue)?;

DirectiveName = (ALPHA / DIGIT / "-")+;

// DirectiveValue = (RequiredAsciiWhiteSpace !([!-+] / [--;] / [<-~]))*

DirectiveValue = SourceList;

SourceList = SourceExpression (RequiredAsciiWhiteSpace SourceExpression)* / "'none'";

SourceExpression = SchemeSource / HostSource / KeywordSource / NonceSource / HashSource;

SchemeSource = SchemePart ":";

HostSource = (SchemePart "://")? HostPart;

KeywordSource = "'self'" / "'unsafe-inline'" / "'unsafe-eval'"
                 / "'strict-dynamic'" / "'unsafe-hashes'"
                 / "'report-sample'" / "'unsafe-allow-redirects'"
                 / "'wasm-unsafe-eval'";

NonceSource = "nonce-" Base64Value;

HashSource = HashAlgorithm "-" Base64Value;

HashAlgorithm = "sha256" / "sha384" / "sha512";

Base64Value = (ALPHA / DIGIT / "+" / "/" / "-" / "_" )+ ("=")|2..|

HostPart = ("*.")? HostChar+ ("." HostChar+)* (".")? / "*";

HostChar = ALPHA / DIGIT / "-";

SchemePart = ALPHA (ALPHA / DIGIT / "+" / "-" / ".")*;

AsciiWhiteSpace = ('\t' / '\n' / '\f' / '\r' / ' ')*;

RequiredAsciiWhiteSpace = ('\t' / '\n' / '\f' / '\r' / ' ')+;

ALPHA = [A-Za-z];

DIGIT = [0-9];