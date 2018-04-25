$(function() {
				$("a").click(function() {
					var href = $(this).attr("href");
					$(href).toggle(500);
									  }
								);
				$(".popup").on("click",".close",function() {
					$(this).parent().toggle(500);
				});
			$("nav a").on("mouseenter mouseleave", function() {
					var href = $(this).attr("href");
					var x = $(this).offset();
					$('#pawf').toggle();
					$('#pawf').css({ 
						"box-sizing": "border-box",
						left: x.left + "px",
						top: x.top + "px",
						bottom: "20px",
						padding: "2em 0 0 0",
						transition: "transform 2s"
					});
						});
			});