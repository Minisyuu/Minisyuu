
function menu() {
	var menu = 
	'<nav id="nav">' +
		'<ul>' +
			'<li class="current"><a href="index.html">ホーム</a></li>' +
			'<li><a href="join_way.html">参加方法</a></li>' +
			'<li>' + 
				'<a href="#">コミュニティ</a>' + 
				'<ul>' +
					'<li><a href="https://web.lobi.co/game/minecraftpe/group/c4ff3d462635b53d61b2b81bc5954d7ee31e8e62/">Lobi</a></li>' +
					'<li><a href="https://discord.gg/ttQNKak">Disocrd</a></li>' +					
				'</ul>' +
			'</li>' +
			'<li><a href="rule.html">ルール</a></li>' +
			'<li><a href="report.html">報告</a></li>' +
		'</ul>' +
	'</nav>';

	document.write(menu);
}