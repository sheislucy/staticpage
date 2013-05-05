function Win(wrapper) {

	// 启用拖动功能
	$(wrapper).draggable({
		containment : $(".container")
	});

	$(wrapper).mousedown(function() {
		this.style.zIndex = Win.maxLayer++;
	});

	// 关闭窗口
	$(wrapper).find("a.wall_close").click(function() {
		$(wrapper).css("visibility", "hidden");
	});
};

Win.maxLayer = 50;
var MessageWall = function() {

	this.show = function(data) {

		for ( var i = 0, len = data.length; i < len; i++) {
			data[i].top = parseInt(Math.random() * (200 - 10 + 1) + 10);
			data[i].left = parseInt(Math.random() * (600 - 10 + 1) + 100);
		}

		var colours = new Array();
		colours[0] = 'green';
		colours[1] = 'blue';
		colours[2] = 'yellow';
		colours[3] = 'red';
		colours[4] = 'purple';
		colours[5] = 'orange';
		var paste = $(".wall_paste");
		for ( var i = 0; i < data.length; i++) {
			var pasteClone = paste.clone();
			pasteClone.removeClass("hide");
			pasteClone.css({
				"left" : (data[i].left || 0) + "px",
				"top" : (data[i].top || 0) + "px",
			});
			pasteClone.addClass(colours[parseInt(Math.random() * 6)]);
			pasteClone.find(".wishTitle").html(data[i].title);
			pasteClone.find(".text").html(data[i].body);
			pasteClone.find(".from").html(
					data[i].ptime + "<br />" + data[i].nickname);
			$(".container").append(pasteClone);
		}

		var msgs = $(".container > div");
		for ( var i = 0, len = data.length; i < len; i++) {
			new Win(msgs[i]);
		}
	};
};

function buildWall(data) {
	var msgWall = new MessageWall();
	msgWall.show(data);
}