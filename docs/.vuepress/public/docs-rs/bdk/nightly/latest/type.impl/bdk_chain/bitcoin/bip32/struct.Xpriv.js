(function() {var type_impls = {
"bdk_chain":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Clone-for-Xpriv\" class=\"impl\"><a href=\"#impl-Clone-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html\" title=\"trait core::clone::Clone\">Clone</a> for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone\" class=\"method trait-impl\"><a href=\"#method.clone\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\" class=\"fn\">clone</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h4></section></summary><div class='docblock'>Returns a copy of the value. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#tymethod.clone\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.clone_from\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/clone.rs.html#169\">source</a></span><a href=\"#method.clone_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\" class=\"fn\">clone_from</a>(&amp;mut self, source: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Self</a>)</h4></section></summary><div class='docblock'>Performs copy-assignment from <code>source</code>. <a href=\"https://doc.rust-lang.org/nightly/core/clone/trait.Clone.html#method.clone_from\">Read more</a></div></details></div></details>","Clone","bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-Xpriv\" class=\"impl\"><a href=\"#impl-Debug-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-Xpriv\" class=\"impl\"><a href=\"#impl-Deserialize%3C'de%3E-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de&gt; <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserialize.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(\n    deserializer: D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a>, &lt;D as <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserializer.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserializer.html#associatedtype.Error\" title=\"type bdk_chain::bitcoin::hashes::serde::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserializer.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Display-for-Xpriv\" class=\"impl\"><a href=\"#impl-Display-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html\" title=\"trait core::fmt::Display\">Display</a> for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, fmt: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Display.html#tymethod.fmt\">Read more</a></div></details></div></details>","Display","bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromStr-for-Xpriv\" class=\"impl\"><a href=\"#impl-FromStr-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html\" title=\"trait core::str::traits::FromStr\">FromStr</a> for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Err\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Err\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html#associatedtype.Err\" class=\"associatedtype\">Err</a> = <a class=\"enum\" href=\"bdk_chain/bitcoin/bip32/enum.Error.html\" title=\"enum bdk_chain::bitcoin::bip32::Error\">Error</a></h4></section></summary><div class='docblock'>The associated error which can be returned from parsing.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_str\" class=\"method trait-impl\"><a href=\"#method.from_str\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html#tymethod.from_str\" class=\"fn\">from_str</a>(inp: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a>, <a class=\"enum\" href=\"bdk_chain/bitcoin/bip32/enum.Error.html\" title=\"enum bdk_chain::bitcoin::bip32::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Parses a string <code>s</code> to return a value of this type. <a href=\"https://doc.rust-lang.org/nightly/core/str/traits/trait.FromStr.html#tymethod.from_str\">Read more</a></div></details></div></details>","FromStr","bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-GetKey-for-Xpriv\" class=\"impl\"><a href=\"#impl-GetKey-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"bdk_chain/bitcoin/psbt/trait.GetKey.html\" title=\"trait bdk_chain::bitcoin::psbt::GetKey\">GetKey</a> for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"bdk_chain/bitcoin/psbt/trait.GetKey.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = <a class=\"enum\" href=\"bdk_chain/bitcoin/psbt/enum.GetKeyError.html\" title=\"enum bdk_chain::bitcoin::psbt::GetKeyError\">GetKeyError</a></h4></section></summary><div class='docblock'>An error occurred while getting the key.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_key\" class=\"method trait-impl\"><a href=\"#method.get_key\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_chain/bitcoin/psbt/trait.GetKey.html#tymethod.get_key\" class=\"fn\">get_key</a>&lt;C&gt;(\n    &amp;self,\n    key_request: <a class=\"enum\" href=\"bdk_chain/bitcoin/psbt/enum.KeyRequest.html\" title=\"enum bdk_chain::bitcoin::psbt::KeyRequest\">KeyRequest</a>,\n    secp: &amp;<a class=\"struct\" href=\"bdk_chain/bitcoin/key/struct.Secp256k1.html\" title=\"struct bdk_chain::bitcoin::key::Secp256k1\">Secp256k1</a>&lt;C&gt;\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"struct\" href=\"bdk_chain/bitcoin/struct.PrivateKey.html\" title=\"struct bdk_chain::bitcoin::PrivateKey\">PrivateKey</a>&gt;, &lt;<a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a> as <a class=\"trait\" href=\"bdk_chain/bitcoin/psbt/trait.GetKey.html\" title=\"trait bdk_chain::bitcoin::psbt::GetKey\">GetKey</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/bitcoin/psbt/trait.GetKey.html#associatedtype.Error\" title=\"type bdk_chain::bitcoin::psbt::GetKey::Error\">Error</a>&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"bdk_chain/bitcoin/secp256k1/trait.Signing.html\" title=\"trait bdk_chain::bitcoin::secp256k1::Signing\">Signing</a>,</div></h4></section></summary><div class='docblock'>Attempts to get the private key for <code>key_request</code>. <a href=\"bdk_chain/bitcoin/psbt/trait.GetKey.html#tymethod.get_key\">Read more</a></div></details></div></details>","GetKey","bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-InnerXKey-for-Xpriv\" class=\"impl\"><a href=\"#impl-InnerXKey-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl InnerXKey for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.xkey_fingerprint\" class=\"method trait-impl\"><a href=\"#method.xkey_fingerprint\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">xkey_fingerprint</a>&lt;C&gt;(&amp;self, secp: &amp;<a class=\"struct\" href=\"bdk_chain/bitcoin/key/struct.Secp256k1.html\" title=\"struct bdk_chain::bitcoin::key::Secp256k1\">Secp256k1</a>&lt;C&gt;) -&gt; <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Fingerprint.html\" title=\"struct bdk_chain::bitcoin::bip32::Fingerprint\">Fingerprint</a><div class=\"where\">where\n    C: <a class=\"trait\" href=\"bdk_chain/bitcoin/secp256k1/trait.Signing.html\" title=\"trait bdk_chain::bitcoin::secp256k1::Signing\">Signing</a>,</div></h4></section></summary><div class='docblock'>Returns the fingerprint of the key</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.can_derive_hardened\" class=\"method trait-impl\"><a href=\"#method.can_derive_hardened\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">can_derive_hardened</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether hardened steps can be derived on the key <a>Read more</a></div></details></div></details>","InnerXKey","bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-PartialEq-for-Xpriv\" class=\"impl\"><a href=\"#impl-PartialEq-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html\" title=\"trait core::cmp::PartialEq\">PartialEq</a> for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.eq\" class=\"method trait-impl\"><a href=\"#method.eq\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#tymethod.eq\" class=\"fn\">eq</a>(&amp;self, other: &amp;<a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>self</code> and <code>other</code> values to be equal, and is used\nby <code>==</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.ne\" class=\"method trait-impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.0.0\">1.0.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/cmp.rs.html#263\">source</a></span><a href=\"#method.ne\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.PartialEq.html#method.ne\" class=\"fn\">ne</a>(&amp;self, other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;Rhs</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>This method tests for <code>!=</code>. The default implementation is almost always\nsufficient, and should not be overridden without very good reason.</div></details></div></details>","PartialEq","bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-Xpriv\" class=\"impl\"><a href=\"#impl-Serialize-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serialize.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Serialize\">Serialize</a> for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_chain/bitcoin/hashes/serde/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(\n    &amp;self,\n    serializer: S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;S as <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serializer.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serializer.html#associatedtype.Ok\" title=\"type bdk_chain::bitcoin::hashes::serde::Serializer::Ok\">Ok</a>, &lt;S as <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serializer.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serializer.html#associatedtype.Error\" title=\"type bdk_chain::bitcoin::hashes::serde::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serializer.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"bdk_chain/bitcoin/hashes/serde/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Xpriv\" class=\"impl\"><a href=\"#impl-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new_master\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html#tymethod.new_master\" class=\"fn\">new_master</a>(\n    network: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"enum\" href=\"bdk_chain/bitcoin/enum.NetworkKind.html\" title=\"enum bdk_chain::bitcoin::NetworkKind\">NetworkKind</a>&gt;,\n    seed: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a>, <a class=\"enum\" href=\"bdk_chain/bitcoin/bip32/enum.Error.html\" title=\"enum bdk_chain::bitcoin::bip32::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Construct a new master key from a seed value</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_priv\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html#tymethod.to_priv\" class=\"fn\">to_priv</a>(self) -&gt; <a class=\"struct\" href=\"bdk_chain/bitcoin/struct.PrivateKey.html\" title=\"struct bdk_chain::bitcoin::PrivateKey\">PrivateKey</a></h4></section></summary><div class=\"docblock\"><p>Constructs ECDSA compressed private key matching internal secret key representation.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.to_keypair\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html#tymethod.to_keypair\" class=\"fn\">to_keypair</a>&lt;C&gt;(self, secp: &amp;<a class=\"struct\" href=\"bdk_chain/bitcoin/key/struct.Secp256k1.html\" title=\"struct bdk_chain::bitcoin::key::Secp256k1\">Secp256k1</a>&lt;C&gt;) -&gt; <a class=\"struct\" href=\"bdk_chain/bitcoin/key/struct.Keypair.html\" title=\"struct bdk_chain::bitcoin::key::Keypair\">Keypair</a><div class=\"where\">where\n    C: <a class=\"trait\" href=\"bdk_chain/bitcoin/secp256k1/trait.Signing.html\" title=\"trait bdk_chain::bitcoin::secp256k1::Signing\">Signing</a>,</div></h4></section></summary><div class=\"docblock\"><p>Constructs BIP340 keypair for Schnorr signatures and Taproot use matching the internal\nsecret key representation.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.derive_priv\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html#tymethod.derive_priv\" class=\"fn\">derive_priv</a>&lt;C, P&gt;(\n    &amp;self,\n    secp: &amp;<a class=\"struct\" href=\"bdk_chain/bitcoin/key/struct.Secp256k1.html\" title=\"struct bdk_chain::bitcoin::key::Secp256k1\">Secp256k1</a>&lt;C&gt;,\n    path: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;P</a>\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a>, <a class=\"enum\" href=\"bdk_chain/bitcoin/bip32/enum.Error.html\" title=\"enum bdk_chain::bitcoin::bip32::Error\">Error</a>&gt;<div class=\"where\">where\n    C: <a class=\"trait\" href=\"bdk_chain/bitcoin/secp256k1/trait.Signing.html\" title=\"trait bdk_chain::bitcoin::secp256k1::Signing\">Signing</a>,\n    P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;[<a class=\"enum\" href=\"bdk_chain/bitcoin/bip32/enum.ChildNumber.html\" title=\"enum bdk_chain::bitcoin::bip32::ChildNumber\">ChildNumber</a>]&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Attempts to derive an extended private key from a path.</p>\n<p>The <code>path</code> argument can be both of type <code>DerivationPath</code> or <code>Vec&lt;ChildNumber&gt;</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.decode\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html#tymethod.decode\" class=\"fn\">decode</a>(data: &amp;[<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>]) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a>, <a class=\"enum\" href=\"bdk_chain/bitcoin/bip32/enum.Error.html\" title=\"enum bdk_chain::bitcoin::bip32::Error\">Error</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Decoding extended private key from binary data according to BIP 32</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.encode\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html#tymethod.encode\" class=\"fn\">encode</a>(&amp;self) -&gt; [<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u8.html\">u8</a>; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">78</a>]</h4></section></summary><div class=\"docblock\"><p>Extended private key binary encoding according to BIP 32</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.identifier\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html#tymethod.identifier\" class=\"fn\">identifier</a>&lt;C&gt;(&amp;self, secp: &amp;<a class=\"struct\" href=\"bdk_chain/bitcoin/key/struct.Secp256k1.html\" title=\"struct bdk_chain::bitcoin::key::Secp256k1\">Secp256k1</a>&lt;C&gt;) -&gt; <a class=\"struct\" href=\"bdk_chain/bitcoin/struct.XKeyIdentifier.html\" title=\"struct bdk_chain::bitcoin::XKeyIdentifier\">XKeyIdentifier</a><div class=\"where\">where\n    C: <a class=\"trait\" href=\"bdk_chain/bitcoin/secp256k1/trait.Signing.html\" title=\"trait bdk_chain::bitcoin::secp256k1::Signing\">Signing</a>,</div></h4></section></summary><div class=\"docblock\"><p>Returns the HASH160 of the public key belonging to the xpriv</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.fingerprint\" class=\"method\"><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html#tymethod.fingerprint\" class=\"fn\">fingerprint</a>&lt;C&gt;(&amp;self, secp: &amp;<a class=\"struct\" href=\"bdk_chain/bitcoin/key/struct.Secp256k1.html\" title=\"struct bdk_chain::bitcoin::key::Secp256k1\">Secp256k1</a>&lt;C&gt;) -&gt; <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Fingerprint.html\" title=\"struct bdk_chain::bitcoin::bip32::Fingerprint\">Fingerprint</a><div class=\"where\">where\n    C: <a class=\"trait\" href=\"bdk_chain/bitcoin/secp256k1/trait.Signing.html\" title=\"trait bdk_chain::bitcoin::secp256k1::Signing\">Signing</a>,</div></h4></section></summary><div class=\"docblock\"><p>Returns the first four bytes of the identifier</p>\n</div></details></div></details>",0,"bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<section id=\"impl-Copy-for-Xpriv\" class=\"impl\"><a href=\"#impl-Copy-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Copy.html\" title=\"trait core::marker::Copy\">Copy</a> for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section>","Copy","bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<section id=\"impl-Eq-for-Xpriv\" class=\"impl\"><a href=\"#impl-Eq-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/cmp/trait.Eq.html\" title=\"trait core::cmp::Eq\">Eq</a> for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section>","Eq","bdk_chain::bitcoin::bip32::ExtendendPrivKey"],["<section id=\"impl-StructuralPartialEq-for-Xpriv\" class=\"impl\"><a href=\"#impl-StructuralPartialEq-for-Xpriv\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.StructuralPartialEq.html\" title=\"trait core::marker::StructuralPartialEq\">StructuralPartialEq</a> for <a class=\"struct\" href=\"bdk_chain/bitcoin/bip32/struct.Xpriv.html\" title=\"struct bdk_chain::bitcoin::bip32::Xpriv\">Xpriv</a></h3></section>","StructuralPartialEq","bdk_chain::bitcoin::bip32::ExtendendPrivKey"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()