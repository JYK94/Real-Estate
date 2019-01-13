<%@ page language="java" contentType="text/html; charset=EUC-KR"
	pageEncoding="EUC-KR"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html lang="en">
<head>
<link href='<c:url value="/resources/css/chat.css" />' rel="stylesheet">
<script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>
<script
	src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
<script src='//cdnjs.cloudflare.com/ajax/libs/list.js/1.1.1/list.min.js'></script>

</head>
<body>
	<!-- Navigation -->
	<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
		<div class="container">
			<a class="navbar-brand" href="#">���� Budong</a>
			<button class="navbar-toggler" type="button" data-toggle="collapse"
				data-target="#navbarResponsive" aria-controls="navbarResponsive"
				aria-expanded="false" aria-label="Toggle navigation">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarResponsive">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item active"><a class="nav-link"
						href="/budong/">Home<span class="sr-only">(current)</span>
					</a></li>
					<li class="nav-item"><a class="nav-link" href="#">�Ź�/�ü�</a></li>
					<li class="nav-item"><a class="nav-link" href="#">����</a></li>
					<li class="nav-item"><a class="nav-link" href="#">���ŷ�</a></li>
					<li class="nav-item"><a class="nav-link" href="#">Ŀ�´�Ƽ</a></li>
					<%
						if (session.getAttribute("login") != null) {
					%>
					<li id="logoutBtn" class="nav-item"><a class="nav-link"
						onclick="location.href='logout.do'">�α׾ƿ�</a></li>
					<!-- ä�� �����̳�  -->
					
					<div class="floating-chat">
						<i class="fas fa-comments" aria-hidden="true"></i> <input
							type="hidden" name="roomName" value="">
 	
						<!-- �� ��� �����̳�  -->
						<div class="room-list" id="room-list">
							<div class="search">
								<input type="text" id="room-filter" placeholder="search" /> <i
									class="fa fa-search"></i>
							</div>
							<ul class="list" id="ul-list">
								<li class="clearfix"><img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
									alt="avatar" />
									<div class="about">
										<div class="name">Vincent Porter</div>
									</div></li>

								<li class="clearfix"><img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_02.jpg"
									alt="avatar" />
									<div class="about">
										<div class="name">Aiden Chavez</div>
									</div></li>

								<li class="clearfix"><img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_03.jpg"
									alt="avatar" />
									<div class="about">
										<div class="name">Mike Thomas</div>
									</div></li>

								<li class="clearfix"><img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_04.jpg"
									alt="avatar" />
									<div class="about">
										<div class="name">Erica Hughes</div>
									</div></li>

								<li class="clearfix"><img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_05.jpg"
									alt="avatar" />
									<div class="about">
										<div class="name">Ginger Johnston</div>
									</div></li>

								<li class="clearfix"><img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_06.jpg"
									alt="avatar" />
									<div class="about">
										<div class="name">Tracy Carpenter</div>
									</div></li>

								<li class="clearfix"><img
									src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_07.jpg"
									alt="avatar" />
									<div class="about">
										<div class="name">Christian Kelly</div>
									</div></li>
							</ul>
						</div>


						<!--ä�� �����̳�  -->
						<div class="chat">
							<!-- ä�� ���  -->
							<div class="header">
								<span id="header-title" class="title"> <c:if
										test="null eq ${roomName}"> ��ü ä�ù� </c:if> <c:if
										test="null != ${roomName}"> ${roomName} </c:if>
								</span>
								<button>
									<i class="fa fa-times" aria-hidden="true"></i>
								</button>
							</div>
							<!-- ä�� ����  -->
							<ul class="chat-history">
							</ul>
							<!--�޽��� ���� �����̳�-->
							<div class="footer clearfix">
								<div class="text-box" contenteditable="true" class="single-line"
									disabled="true"></div>
								<button id="sendMessage">send</button>
							</div>
						</div>
					</div>
					<%
						} else {
					%>
					<li id="loginBtn" class="nav-item"><a class="nav-link"
						href="#">�α���</a></li>
					<%
						}
					%>
				</ul>
			</div>

		</div>
		<%
			if (session.getAttribute("login") != null) {
		%>
		<div class="nav-user-name">${login.mem_id}��</div>
		<%
			}
		%>
	</nav>

	<div id="login-modal">
		<c:import url="./member/memberLogin.jsp">
		</c:import>
	</div>
	
	<c:set var="chatList" value="${chatList}"></c:set>
	<script> 
		window.onload = loadChatInfo();
		
		function loadChatInfo(){
			$.ajax({
				type : 'POST',
				data : {
					"mem_id" : "${login.mem_id}"
				}, 
				url : "checkRoom.do",
				success : function(data) { 

				},error : function(data) {
					console.log("failed loading room name ");
				}
			});
		}
		
		function loadChatHistory(roomName) {
			$.ajax({
				type : 'POST', 
				data : roomName,
				url : "chatList.do", 
				success : function(data) {
					setChatHistory(data);
				}, 
				error : function(data) {
					console.log("failed loading chat history"); 
				}
			});
		}
		
		function setChatHistory(data) {
			console.log('${chatList}');
		}
		
	</script> 
	
	<script>
		var modal = document.getElementById('login-modal');
		var loginBtn = document.getElementById('loginBtn');
		var closeModal = document.getElementById('modal-close');

		loginBtn.onclick = function() {
			modal.style.display = "block";
		}

		closeModal.onclick = function() {
			modal.style.display = "none";
		}

		window.onclick = function(e) {
			if (e.target == modal) {
				modal.style.display = "none";
			}
		}
	</script>
	
	<script type="text/javascript"> 
		var webSocket;

		<%-- <%=R.requestToHostWithScheme("ws",R.mapping.request_web_socket)%> --%>
		function connectWebSocket() {			/*�� ���� ���� */
			webSocket = new WebSocket('ws://localhost:8080/budong/chatting'); 
			webSocket.onerror = function(event) {
				onError(event);
			};

			webSocket.onopen = function(event) {
				console.log(webSocket+"����");
				onOpen(event);
			};

			webSocket.onmessage = function(event) {
				onMessage(event);
			};
			
			webSocket.onclose=function(event) {
				console.log(webSocket+"����");
				onClose(event);
			};
		} 
		 
		//���濡�Լ� �޽��� ���� 
		function onMessage(event) {
			console.log(event.data);

			//JSON �޾Ƽ� �Ľ� 
			var msg = JSON.parse(event.data);
			var messagesContainer = $('.chat-history');

			if (msg.type == "msg") {
				if (msg.id != "${login.mem_id}") { //�Ϲݸ޽���
					messagesContainer
							.append([
									'<li> <div class="message-data"> <span class="message-data-name">',
									msg.id,
									'</span> <span class="message-data-time">',
									msg.date,
									'</span> </div> <div class="message other-message">',
									msg.text, '</div> </li>' ].join(''));
				}
			} else if (msg.type == "enterMsg") { //���� �޽��� 
					messagesContainer.append([ '<li> <div class="message-data notice-message">', msg.id, '���� ',
							msg.roomName, '�濡 �����ϼ̽��ϴ�.</div> </li>' ].join(''));
			}else if(msg.type == "exitMsg") { //���� �޽��� 
				if(msg.id !="${login.mem_id}") { //��ȭ�鿡 ������� ���� 
					messagesContainer.append([ '<li>  <div class="message-data notice-message">', msg.id, '���� ',
						msg.roomName, '���� �����ϼ̽��ϴ�. </div> </li>' ].join(''));
				}
			}

			messagesContainer.finish().animate({
				scrollTop : messagesContainer.prop("scrollHeight")
			}, 250);

		}

		function onOpen(event) {
			console.log(webSocket+"����");
		}

		function onError(event) {
			alert(event);
		}

		function onClose(event) {
		}

		//�޽��� ���� 
		function send() {
			var userInput = $('.text-box');
			var newMessage = userInput.html().replace(/\<div\>|\<br.*?\>/ig,
					'\n').replace(/\<\/div\>/g, '').trim().replace(/\n/g);

			if (!newMessage)
				return;

			var messagesContainer = $('.chat-history');

			//���̵�, �������̹���, ä�ó���, ���̸�, �����ð��� JSON�� ���� 			
			var d = new Date();
			var msg = {
				type : "msg",
				id : "${login.mem_id}",
				text : newMessage,
				roomName : $("[name='roomName']").val(),
				date : d.toLocaleString()
			}

			messagesContainer
					.append([
							'<li class="clearfix"> <div class="message-data align-right"> <span class="message-data-time">',
							msg.date,
							'</span>  &nbsp; <span class="message-data-name">',
							msg.id,
							'</span> </div> <div class="message my-message float-right">',
							msg.text, '</div> </li>' ].join(''));

			// clean out old message
			userInput.html('');
			// focus on input
			userInput.focus();

			messagesContainer.finish().animate({
				scrollTop : messagesContainer.prop("scrollHeight")
			}, 250);

			webSocket.send(JSON.stringify(msg));
			userInput.value = "";
		}

		var element = $('.floating-chat');

		setTimeout(function() {
			element.addClass('enter');
		}, 1000);

		element.click(openElement);

		function openElement() {
			var messages = element.find('.messages');
			var textInput = element.find('.text-box');
			element.find('>i').hide();
			element.addClass('expand');
			element.find('.chat').addClass('chat-enter');
			element.find('.room-list').addClass('room-list-enter');

			textInput.keydown(onMetaAndEnter).prop("disabled", false).focus();
			element.off('click', openElement);
			element.find('.header button').click(closeElement); //�ݱ��ư 
			element.find('#sendMessage').click(send); //���۹�ư
			messages.scrollTop(messages.prop("scrollHeight"));
		}

		function closeElement() {
			element.find('.chat').removeClass('chat-enter').hide();
			element.find('.room-list').removeClass('room-list-enter').hide();
			element.find('>i').show();
			element.removeClass('expand');
			element.find('.header button').off('click', closeElement);
			element.find('#sendMessage').off('click', send);
			element.find('.text-box').off('keydown', onMetaAndEnter).prop(
					"disabled", true).blur();

			setTimeout(function() {
				element.find('.chat').removeClass('chat-enter').show()
				element.find('.room-list').removeClass('room-list-enter')
						.show()
				element.click(openElement);
			}, 500);
		}

		//����Ű ����
		function onMetaAndEnter(event) {
			if (event.keyCode == 13) {
				send();
			}
		}

		//�� ���� 
		var room = $('.room-list li');
		room.click(enterRoom);

		//�� ���� �� ������ ���� �Ѵ�. 
		function enterRoom() {
			var title = $('#header-title');
			$("[name='roomName']").val($(this).text().trim()); //������ ���̸� ����   

			$.ajax({
				type : 'POST',
				data : $("[name='roomName']"),
				url : "moveChatRoom.do",
				success : function(data) {
					console.log(data);
					title.text(data);
					connectWebSocket();//������ ����
					$('.chat-history').empty(); // �� �̵��� ���� ��ȭ��� ����  

				},
				error : function(data) {
					console.log("Server Error");
				}
			});
		}
		
		
		/*�� �̸� �˻� ���� */
		(function() {
			var searchFilter = {
				options : {
					valueNames : [ 'name' ]
				},

				init : function() {
					//room-list �Ʒ��� 'name'Ŭ�������� ��ҵ�� ����Ʈ ���� 
					var userList = new List('room-list', this.options);
					var noItems = $('<li id="no-items-found">No items found</li>');

					userList.on('updated', function(list) {
						if (list.matchingItems.length === 0) {
							$(list.list).append(noItems);
						} else {
							noItems.detach();
						}
					});
				}

			};

			searchFilter.init();
		})();
	</script>

</body>
</html>
