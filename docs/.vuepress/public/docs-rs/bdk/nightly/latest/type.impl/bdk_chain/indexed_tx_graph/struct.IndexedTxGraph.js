(function() {var type_impls = {
"example_cli":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-AsRef%3CTxGraph%3CA%3E%3E-for-IndexedTxGraph%3CA,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#329\">source</a><a href=\"#impl-AsRef%3CTxGraph%3CA%3E%3E-for-IndexedTxGraph%3CA,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html\" title=\"trait core::convert::AsRef\">AsRef</a>&lt;<a class=\"struct\" href=\"bdk_chain/tx_graph/struct.TxGraph.html\" title=\"struct bdk_chain::tx_graph::TxGraph\">TxGraph</a>&lt;A&gt;&gt; for <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\">IndexedTxGraph</a>&lt;A, I&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.as_ref\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#330\">source</a><a href=\"#method.as_ref\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/convert/trait.AsRef.html#tymethod.as_ref\" class=\"fn\">as_ref</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"bdk_chain/tx_graph/struct.TxGraph.html\" title=\"struct bdk_chain::tx_graph::TxGraph\">TxGraph</a>&lt;A&gt;</h4></section></summary><div class='docblock'>Converts this type into a shared reference of the (usually inferred) input type.</div></details></div></details>","AsRef<TxGraph<A>>","example_cli::KeychainTxGraph"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-IndexedTxGraph%3CA,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#16\">source</a><a href=\"#impl-Debug-for-IndexedTxGraph%3CA,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\">IndexedTxGraph</a>&lt;A, I&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#16\">source</a><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","example_cli::KeychainTxGraph"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Default-for-IndexedTxGraph%3CA,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#23\">source</a><a href=\"#impl-Default-for-IndexedTxGraph%3CA,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, I&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\">IndexedTxGraph</a>&lt;A, I&gt;<div class=\"where\">where\n    I: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.default\" class=\"method trait-impl\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#24\">source</a><a href=\"#method.default\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\" class=\"fn\">default</a>() -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\">IndexedTxGraph</a>&lt;A, I&gt;</h4></section></summary><div class='docblock'>Returns the “default value” for a type. <a href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html#tymethod.default\">Read more</a></div></details></div></details>","Default","example_cli::KeychainTxGraph"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IndexedTxGraph%3CA,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#256-260\">source</a><a href=\"#impl-IndexedTxGraph%3CA,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, I&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\">IndexedTxGraph</a>&lt;A, I&gt;<div class=\"where\">where\n    &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"bdk_core/merge/trait.Merge.html\" title=\"trait bdk_core::merge::Merge\">Merge</a>,\n    A: for&lt;'b&gt; <a class=\"trait\" href=\"bdk_chain/tx_data_traits/trait.Anchor.html\" title=\"trait bdk_chain::tx_data_traits::Anchor\">Anchor</a> + for&lt;'b&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.From.html\" title=\"trait core::convert::From\">From</a>&lt;<a class=\"struct\" href=\"bdk_chain/tx_data_traits/struct.TxPosInBlock.html\" title=\"struct bdk_chain::tx_data_traits::TxPosInBlock\">TxPosInBlock</a>&lt;'b&gt;&gt;,\n    I: <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>,</div></h3></section></summary><div class=\"docblock\"><p>Methods are available if the anchor (<code>A</code>) can be created from <a href=\"bdk_chain/tx_data_traits/struct.TxPosInBlock.html\" title=\"struct bdk_chain::tx_data_traits::TxPosInBlock\"><code>TxPosInBlock</code></a>.</p>\n</div><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_block_relevant\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#269-273\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.apply_block_relevant\" class=\"fn\">apply_block_relevant</a>(\n    &amp;mut self,\n    block: &amp;Block,\n    height: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>\n) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Batch insert all transactions of the given <code>block</code> of <code>height</code>, filtering out those that are\nirrelevant.</p>\n<p>Each inserted transaction’s anchor will be constructed using <a href=\"bdk_chain/tx_data_traits/struct.TxPosInBlock.html\" title=\"struct bdk_chain::tx_data_traits::TxPosInBlock\"><code>TxPosInBlock</code></a>.</p>\n<p>Relevancy is determined by the internal <a href=\"bdk_chain/indexer/trait.Indexer.html#tymethod.is_tx_relevant\" title=\"method bdk_chain::indexer::Indexer::is_tx_relevant\"><code>Indexer::is_tx_relevant</code></a> implementation of <code>I</code>.\nIrrelevant transactions in <code>txs</code> will be ignored.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_block\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#305\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.apply_block\" class=\"fn\">apply_block</a>(\n    &amp;mut self,\n    block: Block,\n    height: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u32.html\">u32</a>\n) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Batch insert all transactions of the given <code>block</code> of <code>height</code>.</p>\n<p>Each inserted transaction’s anchor will be constructed using <a href=\"bdk_chain/tx_data_traits/struct.TxPosInBlock.html\" title=\"struct bdk_chain::tx_data_traits::TxPosInBlock\"><code>TxPosInBlock</code></a>.</p>\n<p>To only insert relevant transactions, use <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#method.apply_block_relevant\" title=\"method bdk_chain::indexed_tx_graph::IndexedTxGraph::apply_block_relevant\"><code>apply_block_relevant</code></a> instead.</p>\n</div></details></div></details>",0,"example_cli::KeychainTxGraph"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IndexedTxGraph%3CA,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#32\">source</a><a href=\"#impl-IndexedTxGraph%3CA,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, I&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\">IndexedTxGraph</a>&lt;A, I&gt;</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.new\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#34\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.new\" class=\"fn\">new</a>(index: I) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\">IndexedTxGraph</a>&lt;A, I&gt;</h4></section></summary><div class=\"docblock\"><p>Construct a new <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\"><code>IndexedTxGraph</code></a> with a given <code>index</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.graph\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#42\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.graph\" class=\"fn\">graph</a>(&amp;self) -&gt; &amp;<a class=\"struct\" href=\"bdk_chain/tx_graph/struct.TxGraph.html\" title=\"struct bdk_chain::tx_graph::TxGraph\">TxGraph</a>&lt;A&gt;</h4></section></summary><div class=\"docblock\"><p>Get a reference of the internal transaction graph.</p>\n</div></details></div></details>",0,"example_cli::KeychainTxGraph"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IndexedTxGraph%3CA,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#47\">source</a><a href=\"#impl-IndexedTxGraph%3CA,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, I&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\">IndexedTxGraph</a>&lt;A, I&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"bdk_chain/tx_data_traits/trait.Anchor.html\" title=\"trait bdk_chain::tx_data_traits::Anchor\">Anchor</a>,\n    I: <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_changeset\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#49\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.apply_changeset\" class=\"fn\">apply_changeset</a>(\n    &amp;mut self,\n    changeset: <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;\n)</h4></section></summary><div class=\"docblock\"><p>Applies the <a href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\"><code>ChangeSet</code></a> to the <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\"><code>IndexedTxGraph</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.initial_changeset\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#63\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.initial_changeset\" class=\"fn\">initial_changeset</a>(&amp;self) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Determines the <a href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\"><code>ChangeSet</code></a> between <code>self</code> and an empty <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\"><code>IndexedTxGraph</code></a>.</p>\n</div></details></div></details>",0,"example_cli::KeychainTxGraph"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-IndexedTxGraph%3CA,+I%3E\" class=\"impl\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#73-75\">source</a><a href=\"#impl-IndexedTxGraph%3CA,+I%3E\" class=\"anchor\">§</a><h3 class=\"code-header\">impl&lt;A, I&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html\" title=\"struct bdk_chain::indexed_tx_graph::IndexedTxGraph\">IndexedTxGraph</a>&lt;A, I&gt;<div class=\"where\">where\n    A: <a class=\"trait\" href=\"bdk_chain/tx_data_traits/trait.Anchor.html\" title=\"trait bdk_chain::tx_data_traits::Anchor\">Anchor</a>,\n    I: <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>,\n    &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + <a class=\"trait\" href=\"bdk_core/merge/trait.Merge.html\" title=\"trait bdk_core::merge::Merge\">Merge</a>,</div></h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_update\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#96\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.apply_update\" class=\"fn\">apply_update</a>(\n    &amp;mut self,\n    update: <a class=\"struct\" href=\"bdk_core/tx_update/struct.TxUpdate.html\" title=\"struct bdk_core::tx_update::TxUpdate\">TxUpdate</a>&lt;A&gt;\n) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Apply an <code>update</code> directly.</p>\n<p><code>update</code> is a <a href=\"bdk_core/tx_update/struct.TxUpdate.html\" title=\"struct bdk_core::tx_update::TxUpdate\"><code>tx_graph::TxUpdate&lt;A&gt;</code></a> and the resultant changes is returned as <a href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\"><code>ChangeSet</code></a>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.apply_update_at\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#115-119\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.apply_update_at\" class=\"fn\">apply_update_at</a>(\n    &amp;mut self,\n    update: <a class=\"struct\" href=\"bdk_core/tx_update/struct.TxUpdate.html\" title=\"struct bdk_core::tx_update::TxUpdate\">TxUpdate</a>&lt;A&gt;,\n    seen_at: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>&gt;\n) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Apply the given <code>update</code> with an optional <code>seen_at</code> timestamp.</p>\n<p><code>seen_at</code> represents when the update is seen (in unix seconds). It is used to determine the\n<code>last_seen</code>s for all transactions in the update which have no corresponding anchor(s). The\n<code>last_seen</code> value is used internally to determine precedence of conflicting unconfirmed\ntransactions (where the transaction with the lower <code>last_seen</code> value is omitted from the\ncanonical history).</p>\n<p>Not setting a <code>seen_at</code> value means unconfirmed transactions introduced by this update will\nnot be part of the canonical history of transactions.</p>\n<p>Use <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#method.apply_update\" title=\"method bdk_chain::indexed_tx_graph::IndexedTxGraph::apply_update\"><code>apply_update</code></a> to have the <code>seen_at</code> value automatically\nset to the current time.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_txout\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#126\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.insert_txout\" class=\"fn\">insert_txout</a>(\n    &amp;mut self,\n    outpoint: OutPoint,\n    txout: TxOut\n) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Insert a floating <code>txout</code> of given <code>outpoint</code>.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_tx\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#136\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.insert_tx\" class=\"fn\">insert_tx</a>&lt;T&gt;(&amp;mut self, tx: T) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Transaction&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Insert and index a transaction into the graph.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_anchor\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#143\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.insert_anchor\" class=\"fn\">insert_anchor</a>(\n    &amp;mut self,\n    txid: Txid,\n    anchor: A\n) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Insert an <code>anchor</code> for a given transaction.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.insert_seen_at\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#151\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.insert_seen_at\" class=\"fn\">insert_seen_at</a>(\n    &amp;mut self,\n    txid: Txid,\n    seen_at: <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>\n) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;</h4></section></summary><div class=\"docblock\"><p>Insert a unix timestamp of when a transaction is seen in the mempool.</p>\n<p>This is used for transaction conflict resolution in <a href=\"bdk_chain/tx_graph/struct.TxGraph.html\" title=\"struct bdk_chain::tx_graph::TxGraph\"><code>TxGraph</code></a> where the transaction with\nthe later last-seen is prioritized.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.batch_insert_relevant\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#159-162\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.batch_insert_relevant\" class=\"fn\">batch_insert_relevant</a>&lt;T&gt;(\n    &amp;mut self,\n    txs: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (T, impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = A&gt;)&gt;\n) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Transaction&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Batch insert transactions, filtering out those that are irrelevant.</p>\n<p>Relevancy is determined by the <a href=\"bdk_chain/indexer/trait.Indexer.html#tymethod.is_tx_relevant\" title=\"method bdk_chain::indexer::Indexer::is_tx_relevant\"><code>Indexer::is_tx_relevant</code></a> implementation of <code>I</code>. Irrelevant\ntransactions in <code>txs</code> will be ignored. <code>txs</code> do not need to be in topological order.</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.batch_insert_relevant_unconfirmed\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#201-204\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.batch_insert_relevant_unconfirmed\" class=\"fn\">batch_insert_relevant_unconfirmed</a>&lt;T&gt;(\n    &amp;mut self,\n    unconfirmed_txs: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>)&gt;\n) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Transaction&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Batch insert unconfirmed transactions, filtering out those that are irrelevant.</p>\n<p>Relevancy is determined by the internal <a href=\"bdk_chain/indexer/trait.Indexer.html#tymethod.is_tx_relevant\" title=\"method bdk_chain::indexer::Indexer::is_tx_relevant\"><code>Indexer::is_tx_relevant</code></a> implementation of <code>I</code>.\nIrrelevant transactions in <code>txs</code> will be ignored.</p>\n<p>Items of <code>txs</code> are tuples containing the transaction and a <em>last seen</em> timestamp. The\n<em>last seen</em> communicates when the transaction is last seen in the mempool which is used for\nconflict-resolution in <a href=\"bdk_chain/tx_graph/struct.TxGraph.html\" title=\"struct bdk_chain::tx_graph::TxGraph\"><code>TxGraph</code></a> (refer to <a href=\"bdk_chain/tx_graph/struct.TxGraph.html#method.insert_seen_at\" title=\"method bdk_chain::tx_graph::TxGraph::insert_seen_at\"><code>TxGraph::insert_seen_at</code></a> for details).</p>\n</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.batch_insert_unconfirmed\" class=\"method\"><a class=\"src rightside\" href=\"src/bdk_chain/indexed_tx_graph.rs.html#242-245\">source</a><h4 class=\"code-header\">pub fn <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#tymethod.batch_insert_unconfirmed\" class=\"fn\">batch_insert_unconfirmed</a>&lt;T&gt;(\n    &amp;mut self,\n    txs: impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/iter/traits/collect/trait.IntoIterator.html\" title=\"trait core::iter::traits::collect::IntoIterator\">IntoIterator</a>&lt;Item = (T, <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.u64.html\">u64</a>)&gt;\n) -&gt; <a class=\"struct\" href=\"bdk_chain/indexed_tx_graph/struct.ChangeSet.html\" title=\"struct bdk_chain::indexed_tx_graph::ChangeSet\">ChangeSet</a>&lt;A, &lt;I as <a class=\"trait\" href=\"bdk_chain/indexer/trait.Indexer.html\" title=\"trait bdk_chain::indexer::Indexer\">Indexer</a>&gt;::<a class=\"associatedtype\" href=\"bdk_chain/indexer/trait.Indexer.html#associatedtype.ChangeSet\" title=\"type bdk_chain::indexer::Indexer::ChangeSet\">ChangeSet</a>&gt;<div class=\"where\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/convert/trait.Into.html\" title=\"trait core::convert::Into\">Into</a>&lt;<a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/alloc/sync/struct.Arc.html\" title=\"struct alloc::sync::Arc\">Arc</a>&lt;Transaction&gt;&gt;,</div></h4></section></summary><div class=\"docblock\"><p>Batch insert unconfirmed transactions.</p>\n<p>Items of <code>txs</code> are tuples containing the transaction and a <em>last seen</em> timestamp. The\n<em>last seen</em> communicates when the transaction is last seen in the mempool which is used for\nconflict-resolution in <a href=\"bdk_chain/tx_graph/struct.TxGraph.html\" title=\"struct bdk_chain::tx_graph::TxGraph\"><code>TxGraph</code></a> (refer to <a href=\"bdk_chain/tx_graph/struct.TxGraph.html#method.insert_seen_at\" title=\"method bdk_chain::tx_graph::TxGraph::insert_seen_at\"><code>TxGraph::insert_seen_at</code></a> for details).</p>\n<p>To filter out irrelevant transactions, use <a href=\"bdk_chain/indexed_tx_graph/struct.IndexedTxGraph.html#method.batch_insert_relevant_unconfirmed\" title=\"method bdk_chain::indexed_tx_graph::IndexedTxGraph::batch_insert_relevant_unconfirmed\"><code>batch_insert_relevant_unconfirmed</code></a> instead.</p>\n</div></details></div></details>",0,"example_cli::KeychainTxGraph"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()