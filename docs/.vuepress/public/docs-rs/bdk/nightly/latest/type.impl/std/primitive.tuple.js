(function() {var type_impls = {
"bdk_chain":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Decodable-for-(T0,+T1)\" class=\"impl\"><a href=\"#impl-Decodable-for-(T0,+T1)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T0, T1&gt; <a class=\"trait\" href=\"bdk_chain/bitcoin/consensus/trait.Decodable.html\" title=\"trait bdk_chain::bitcoin::consensus::Decodable\">Decodable</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a><div class=\"where\">where\n    T0: <a class=\"trait\" href=\"bdk_chain/bitcoin/consensus/trait.Decodable.html\" title=\"trait bdk_chain::bitcoin::consensus::Decodable\">Decodable</a>,\n    T1: <a class=\"trait\" href=\"bdk_chain/bitcoin/consensus/trait.Decodable.html\" title=\"trait bdk_chain::bitcoin::consensus::Decodable\">Decodable</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.consensus_decode\" class=\"method trait-impl\"><a href=\"#method.consensus_decode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_chain/bitcoin/consensus/trait.Decodable.html#method.consensus_decode\" class=\"fn\">consensus_decode</a>&lt;R&gt;(r: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut R</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a>, <a class=\"enum\" href=\"bdk_chain/bitcoin/consensus/encode/enum.Error.html\" title=\"enum bdk_chain::bitcoin::consensus::encode::Error\">Error</a>&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bdk_chain/bitcoin/io/trait.Read.html\" title=\"trait bdk_chain::bitcoin::io::Read\">Read</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Decode an object with a well-defined format. <a href=\"bdk_chain/bitcoin/consensus/trait.Decodable.html#method.consensus_decode\">Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.consensus_decode_from_finite_reader\" class=\"method trait-impl\"><a href=\"#method.consensus_decode_from_finite_reader\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_chain/bitcoin/consensus/trait.Decodable.html#method.consensus_decode_from_finite_reader\" class=\"fn\">consensus_decode_from_finite_reader</a>&lt;R&gt;(reader: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut R</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;Self, <a class=\"enum\" href=\"bdk_chain/bitcoin/consensus/encode/enum.Error.html\" title=\"enum bdk_chain::bitcoin::consensus::encode::Error\">Error</a>&gt;<div class=\"where\">where\n    R: <a class=\"trait\" href=\"bdk_chain/bitcoin/io/trait.Read.html\" title=\"trait bdk_chain::bitcoin::io::Read\">Read</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Decode <code>Self</code> from a size-limited reader. <a href=\"bdk_chain/bitcoin/consensus/trait.Decodable.html#method.consensus_decode_from_finite_reader\">Read more</a></div></details></div></details>","Decodable","bdk_chain::Indexed","bdk_chain::KeychainIndexed","bdk_chain::bitcoin::bip32::KeySource"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Deserialize%3C'de%3E-for-(T0,+T1)\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/serde/1.0.216/src/serde/de/impls.rs.html#1492-1508\">source</a><a href=\"#impl-Deserialize%3C'de%3E-for-(T0,+T1)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'de, T0, T1&gt; <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserialize.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Deserialize\">Deserialize</a>&lt;'de&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a><div class=\"where\">where\n    T0: <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserialize.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Deserialize\">Deserialize</a>&lt;'de&gt;,\n    T1: <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserialize.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Deserialize\">Deserialize</a>&lt;'de&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.deserialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/serde/1.0.216/src/serde/de/impls.rs.html#1492-1508\">source</a><a href=\"#method.deserialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserialize.html#tymethod.deserialize\" class=\"fn\">deserialize</a>&lt;D&gt;(\n    deserializer: D\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a>, &lt;D as <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserializer.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Deserializer\">Deserializer</a>&lt;'de&gt;&gt;::<a class=\"associatedtype\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserializer.html#associatedtype.Error\" title=\"type bdk_chain::bitcoin::hashes::serde::Deserializer::Error\">Error</a>&gt;<div class=\"where\">where\n    D: <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserializer.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Deserializer\">Deserializer</a>&lt;'de&gt;,</div></h4></section></summary><div class='docblock'>Deserialize this value from the given Serde deserializer. <a href=\"bdk_chain/bitcoin/hashes/serde/trait.Deserialize.html#tymethod.deserialize\">Read more</a></div></details></div></details>","Deserialize<'de>","bdk_chain::Indexed","bdk_chain::KeychainIndexed","bdk_chain::bitcoin::bip32::KeySource"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Encodable-for-(T0,+T1)\" class=\"impl\"><a href=\"#impl-Encodable-for-(T0,+T1)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T0, T1&gt; <a class=\"trait\" href=\"bdk_chain/bitcoin/consensus/trait.Encodable.html\" title=\"trait bdk_chain::bitcoin::consensus::Encodable\">Encodable</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a><div class=\"where\">where\n    T0: <a class=\"trait\" href=\"bdk_chain/bitcoin/consensus/trait.Encodable.html\" title=\"trait bdk_chain::bitcoin::consensus::Encodable\">Encodable</a>,\n    T1: <a class=\"trait\" href=\"bdk_chain/bitcoin/consensus/trait.Encodable.html\" title=\"trait bdk_chain::bitcoin::consensus::Encodable\">Encodable</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.consensus_encode\" class=\"method trait-impl\"><a href=\"#method.consensus_encode\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_chain/bitcoin/consensus/trait.Encodable.html#tymethod.consensus_encode\" class=\"fn\">consensus_encode</a>&lt;W&gt;(&amp;self, w: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.reference.html\">&amp;mut W</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>, <a class=\"struct\" href=\"bdk_chain/bitcoin/io/struct.Error.html\" title=\"struct bdk_chain::bitcoin::io::Error\">Error</a>&gt;<div class=\"where\">where\n    W: <a class=\"trait\" href=\"bdk_chain/bitcoin/io/trait.Write.html\" title=\"trait bdk_chain::bitcoin::io::Write\">Write</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</div></h4></section></summary><div class='docblock'>Encodes an object with a well-defined format. <a href=\"bdk_chain/bitcoin/consensus/trait.Encodable.html#tymethod.consensus_encode\">Read more</a></div></details></div></details>","Encodable","bdk_chain::Indexed","bdk_chain::KeychainIndexed","bdk_chain::bitcoin::bip32::KeySource"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Extend%3C(A,+B)%3E-for-(ExtendA,+ExtendB)\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.56.0\">1.56.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#474-477\">source</a></span><a href=\"#impl-Extend%3C(A,+B)%3E-for-(ExtendA,+ExtendB)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B, ExtendA, ExtendB&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(ExtendA, ExtendB)</a><div class=\"where\">where\n    ExtendA: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;A&gt;,\n    ExtendB: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;B&gt;,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#499\">source</a><a href=\"#method.extend\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#tymethod.extend\" class=\"fn\">extend</a>&lt;T&gt;(&amp;mut self, into_iter: T)<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a>&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Allows to <code>extend</code> a tuple of collections that also implement <code>Extend</code>.</p>\n<p>See also: <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.unzip\" title=\"method core::iter::traits::iterator::Iterator::unzip\"><code>Iterator::unzip</code></a></p>\n<h5 id=\"examples\"><a class=\"doc-anchor\" href=\"#examples\">§</a>Examples</h5>\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>tuple = (<span class=\"macro\">vec!</span>[<span class=\"number\">0</span>], <span class=\"macro\">vec!</span>[<span class=\"number\">1</span>]);\ntuple.extend([(<span class=\"number\">2</span>, <span class=\"number\">3</span>), (<span class=\"number\">4</span>, <span class=\"number\">5</span>), (<span class=\"number\">6</span>, <span class=\"number\">7</span>)]);\n<span class=\"macro\">assert_eq!</span>(tuple.<span class=\"number\">0</span>, [<span class=\"number\">0</span>, <span class=\"number\">2</span>, <span class=\"number\">4</span>, <span class=\"number\">6</span>]);\n<span class=\"macro\">assert_eq!</span>(tuple.<span class=\"number\">1</span>, [<span class=\"number\">1</span>, <span class=\"number\">3</span>, <span class=\"number\">5</span>, <span class=\"number\">7</span>]);\n\n<span class=\"comment\">// also allows for arbitrarily nested tuples as elements\n</span><span class=\"kw\">let </span><span class=\"kw-2\">mut </span>nested_tuple = (<span class=\"macro\">vec!</span>[<span class=\"number\">1</span>], (<span class=\"macro\">vec!</span>[<span class=\"number\">2</span>], <span class=\"macro\">vec!</span>[<span class=\"number\">3</span>]));\nnested_tuple.extend([(<span class=\"number\">4</span>, (<span class=\"number\">5</span>, <span class=\"number\">6</span>)), (<span class=\"number\">7</span>, (<span class=\"number\">8</span>, <span class=\"number\">9</span>))]);\n\n<span class=\"kw\">let </span>(a, (b, c)) = nested_tuple;\n<span class=\"macro\">assert_eq!</span>(a, [<span class=\"number\">1</span>, <span class=\"number\">4</span>, <span class=\"number\">7</span>]);\n<span class=\"macro\">assert_eq!</span>(b, [<span class=\"number\">2</span>, <span class=\"number\">5</span>, <span class=\"number\">8</span>]);\n<span class=\"macro\">assert_eq!</span>(c, [<span class=\"number\">3</span>, <span class=\"number\">6</span>, <span class=\"number\">9</span>]);</code></pre></div>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_one\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#522\">source</a><a href=\"#method.extend_one\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_one\" class=\"fn\">extend_one</a>(&amp;mut self, item: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a>)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Extends a collection with exactly one element.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.extend_reserve\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#527\">source</a><a href=\"#method.extend_reserve\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\" class=\"fn\">extend_reserve</a>(&amp;mut self, additional: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a>)</h4></section></summary><span class=\"item-info\"><div class=\"stab unstable\"><span class=\"emoji\">🔬</span><span>This is a nightly-only experimental API. (<code>extend_one</code>)</span></div></span><div class='docblock'>Reserves capacity in a collection for the given number of additional elements. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html#method.extend_reserve\">Read more</a></div></details></div></details>","Extend<(A, B)>","bdk_chain::Indexed","bdk_chain::KeychainIndexed","bdk_chain::bitcoin::bip32::KeySource"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3C%5BT;+2%5D%3E-for-(T,+T)\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.71.0\">1.71.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/tuple.rs.html#201\">source</a></span><a href=\"#impl-From%3C%5BT;+2%5D%3E-for-(T,+T)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[T; 2]</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T, T)</a></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/tuple.rs.html#201\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(array: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.array.html\">[T; 2]</a>) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T, T)</a></h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<[T; 2]>","bdk_chain::Indexed","bdk_chain::KeychainIndexed","bdk_chain::bitcoin::bip32::KeySource"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CBlockId%3E-for-(u32,+BlockHash)\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_core/block_id.rs.html#28\">source</a><a href=\"#impl-From%3CBlockId%3E-for-(u32,+BlockHash)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"bdk_chain/struct.BlockId.html\" title=\"struct bdk_chain::BlockId\">BlockId</a>&gt; for (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"bdk_chain/bitcoin/struct.BlockHash.html\" title=\"struct bdk_chain::bitcoin::BlockHash\">BlockHash</a>)</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_core/block_id.rs.html#29\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(block_id: <a class=\"struct\" href=\"bdk_chain/struct.BlockId.html\" title=\"struct bdk_chain::BlockId\">BlockId</a>) -&gt; (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, <a class=\"struct\" href=\"bdk_chain/bitcoin/struct.BlockHash.html\" title=\"struct bdk_chain::bitcoin::BlockHash\">BlockHash</a>)</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<BlockId>","bdk_chain::Indexed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-FromIterator%3C(AE,+BE)%3E-for-(A,+B)\" class=\"impl\"><span class=\"rightside\"><span class=\"since\" title=\"Stable since Rust version 1.79.0\">1.79.0</span> · <a class=\"src\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#173-176\">source</a></span><a href=\"#impl-FromIterator%3C(AE,+BE)%3E-for-(A,+B)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, B, AE, BE&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\">FromIterator</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(AE, BE)</a>&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a><div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;AE&gt;,\n    B: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\">Extend</a>&lt;BE&gt;,</div></h3></section></summary><div class=\"docblock\"><p>This implementation turns an iterator of tuples into a tuple of types which implement\n<a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\"><code>Default</code></a> and <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.Extend.html\" title=\"trait core::iter::traits::collect::Extend\"><code>Extend</code></a>.</p>\n<p>This is similar to <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/iterator/trait.Iterator.html#method.unzip\" title=\"method core::iter::traits::iterator::Iterator::unzip\"><code>Iterator::unzip</code></a>, but is also composable with other <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html\" title=\"trait core::iter::traits::collect::FromIterator\"><code>FromIterator</code></a>\nimplementations:</p>\n\n<div class=\"example-wrap\"><pre class=\"rust rust-example-rendered\"><code><span class=\"kw\">let </span>string = <span class=\"string\">\"1,2,123,4\"</span>;\n\n<span class=\"kw\">let </span>(numbers, lengths): (Vec&lt;<span class=\"kw\">_</span>&gt;, Vec&lt;<span class=\"kw\">_</span>&gt;) = string\n    .split(<span class=\"string\">','</span>)\n    .map(|s| s.parse().map(|n: u32| (n, s.len())))\n    .collect::&lt;<span class=\"prelude-ty\">Result</span>&lt;<span class=\"kw\">_</span>, <span class=\"kw\">_</span>&gt;&gt;()<span class=\"question-mark\">?</span>;\n\n<span class=\"macro\">assert_eq!</span>(numbers, [<span class=\"number\">1</span>, <span class=\"number\">2</span>, <span class=\"number\">123</span>, <span class=\"number\">4</span>]);\n<span class=\"macro\">assert_eq!</span>(lengths, [<span class=\"number\">1</span>, <span class=\"number\">1</span>, <span class=\"number\">3</span>, <span class=\"number\">1</span>]);</code></pre></div>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from_iter\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://doc.rust-lang.org/nightly/src/core/iter/traits/collect.rs.html#178\">source</a><a href=\"#method.from_iter\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\" class=\"fn\">from_iter</a>&lt;I&gt;(iter: I) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(A, B)</a><div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(AE, BE)</a>&gt;,</div></h4></section></summary><div class='docblock'>Creates a value from an iterator. <a href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.FromIterator.html#tymethod.from_iter\">Read more</a></div></details></div></details>","FromIterator<(AE, BE)>","bdk_chain::Indexed","bdk_chain::KeychainIndexed","bdk_chain::bitcoin::bip32::KeySource"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Merge-for-(T0,+T1)\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_core/merge.rs.html#73\">source</a><a href=\"#impl-Merge-for-(T0,+T1)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T0, T1&gt; <a class=\"trait\" href=\"bdk_chain/trait.Merge.html\" title=\"trait bdk_chain::Merge\">Merge</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a><div class=\"where\">where\n    T0: <a class=\"trait\" href=\"bdk_chain/trait.Merge.html\" title=\"trait bdk_chain::Merge\">Merge</a>,\n    T1: <a class=\"trait\" href=\"bdk_chain/trait.Merge.html\" title=\"trait bdk_chain::Merge\">Merge</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.merge\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_core/merge.rs.html#73\">source</a><a href=\"#method.merge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_chain/trait.Merge.html#tymethod.merge\" class=\"fn\">merge</a>(&amp;mut self, _other: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a>)</h4></section></summary><div class='docblock'>Merge another object of the same type onto <code>self</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_core/merge.rs.html#73\">source</a><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_chain/trait.Merge.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether the structure is considered empty.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.take\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_core/merge.rs.html#13\">source</a><a href=\"#method.take\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_chain/trait.Merge.html#method.take\" class=\"fn\">take</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Take the value, replacing it with the default value.</div></details></div></details>","Merge","bdk_chain::Indexed","bdk_chain::KeychainIndexed","bdk_chain::bitcoin::bip32::KeySource"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Serialize-for-(T0,+T1)\" class=\"impl\"><a class=\"src rightside\" href=\"https://docs.rs/serde/1.0.216/src/serde/ser/impls.rs.html#428-444\">source</a><a href=\"#impl-Serialize-for-(T0,+T1)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T0, T1&gt; <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serialize.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Serialize\">Serialize</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a><div class=\"where\">where\n    T0: <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serialize.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Serialize\">Serialize</a>,\n    T1: <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serialize.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Serialize\">Serialize</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.serialize\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"https://docs.rs/serde/1.0.216/src/serde/ser/impls.rs.html#428-444\">source</a><a href=\"#method.serialize\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_chain/bitcoin/hashes/serde/trait.Serialize.html#tymethod.serialize\" class=\"fn\">serialize</a>&lt;S&gt;(\n    &amp;self,\n    serializer: S\n) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;&lt;S as <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serializer.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serializer.html#associatedtype.Ok\" title=\"type bdk_chain::bitcoin::hashes::serde::Serializer::Ok\">Ok</a>, &lt;S as <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serializer.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Serializer\">Serializer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serializer.html#associatedtype.Error\" title=\"type bdk_chain::bitcoin::hashes::serde::Serializer::Error\">Error</a>&gt;<div class=\"where\">where\n    S: <a class=\"trait\" href=\"bdk_chain/bitcoin/hashes/serde/trait.Serializer.html\" title=\"trait bdk_chain::bitcoin::hashes::serde::Serializer\">Serializer</a>,</div></h4></section></summary><div class='docblock'>Serialize this value into the given Serde serializer. <a href=\"bdk_chain/bitcoin/hashes/serde/trait.Serialize.html#tymethod.serialize\">Read more</a></div></details></div></details>","Serialize","bdk_chain::Indexed","bdk_chain::KeychainIndexed","bdk_chain::bitcoin::bip32::KeySource"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-TryFrom%3C%26Row%3C'a%3E%3E-for-(O,+P)\" class=\"impl\"><a href=\"#impl-TryFrom%3C%26Row%3C'a%3E%3E-for-(O,+P)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;'a, O, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html\" title=\"trait core::convert::TryFrom\">TryFrom</a>&lt;&amp;'a Row&lt;'a&gt;&gt; for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(O, P)</a><div class=\"where\">where\n    O: FromSql,\n    P: FromSql,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Error\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Error\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#associatedtype.Error\" class=\"associatedtype\">Error</a> = Error</h4></section></summary><div class='docblock'>The type returned in the event of a conversion error.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.try_from\" class=\"method trait-impl\"><a href=\"#method.try_from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.TryFrom.html#tymethod.try_from\" class=\"fn\">try_from</a>(row: &amp;'a Row&lt;'a&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(O, P)</a>, Error&gt;</h4></section></summary><div class='docblock'>Performs the conversion.</div></details></div></details>","TryFrom<&'a Row<'a>>","bdk_chain::Indexed","bdk_chain::KeychainIndexed","bdk_chain::bitcoin::bip32::KeySource"]],
"bdk_core":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-From%3CBlockId%3E-for-(u32,+BlockHash)\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_core/block_id.rs.html#28-32\">source</a><a href=\"#impl-From%3CBlockId%3E-for-(u32,+BlockHash)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"bdk_core/struct.BlockId.html\" title=\"struct bdk_core::BlockId\">BlockId</a>&gt; for (<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>, BlockHash)</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.from\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_core/block_id.rs.html#29-31\">source</a><a href=\"#method.from\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html#tymethod.from\" class=\"fn\">from</a>(block_id: <a class=\"struct\" href=\"bdk_core/struct.BlockId.html\" title=\"struct bdk_core::BlockId\">BlockId</a>) -&gt; Self</h4></section></summary><div class='docblock'>Converts to this type from the input type.</div></details></div></details>","From<BlockId>","bdk_core::Indexed"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Merge-for-(T0,+T1)\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_core/merge.rs.html#73\">source</a><a href=\"#impl-Merge-for-(T0,+T1)\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;T0, T1&gt; <a class=\"trait\" href=\"bdk_core/trait.Merge.html\" title=\"trait bdk_core::Merge\">Merge</a> for <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.tuple.html\">(T0, T1)</a><div class=\"where\">where\n    T0: <a class=\"trait\" href=\"bdk_core/trait.Merge.html\" title=\"trait bdk_core::Merge\">Merge</a>,\n    T1: <a class=\"trait\" href=\"bdk_core/trait.Merge.html\" title=\"trait bdk_core::Merge\">Merge</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.merge\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_core/merge.rs.html#73\">source</a><a href=\"#method.merge\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_core/trait.Merge.html#tymethod.merge\" class=\"fn\">merge</a>(&amp;mut self, _other: Self)</h4></section></summary><div class='docblock'>Merge another object of the same type onto <code>self</code>.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.is_empty\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_core/merge.rs.html#73\">source</a><a href=\"#method.is_empty\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_core/trait.Merge.html#tymethod.is_empty\" class=\"fn\">is_empty</a>(&amp;self) -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.bool.html\">bool</a></h4></section></summary><div class='docblock'>Returns whether the structure is considered empty.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.take\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_core/merge.rs.html#13-19\">source</a><a href=\"#method.take\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"bdk_core/trait.Merge.html#method.take\" class=\"fn\">take</a>(&amp;mut self) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self&gt;</h4></section></summary><div class='docblock'>Take the value, replacing it with the default value.</div></details></div></details>","Merge","bdk_core::Indexed","bdk_core::KeychainIndexed"]],
"bdk_wallet":[],
"example_cli":[]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()