post = `{{ postType }}`
		if (post) {
			if (post == "1"){
				document.getElementById('1').src = "static/chat/image-1.PNG"
				document.getElementById('2').src = "static/chat/image-2.PNG"
				document.getElementById('3').src = "static/chat/image-3.PNG"
				document.getElementById('4').src = "static/chat/image-4.PNG"
				document.getElementById('5').src = "static/chat/image-5.PNG"
				document.getElementById('6').src = "static/chat/image-6.PNG"
				document.getElementById('7').src = "static/chat/image-7.PNG"
				document.getElementById('8').src = "static/chat/image-8.PNG"
				document.getElementById('9').src = "static/chat/image-9.PNG"

				document.getElementById('about').innerHTML = "SendWithMe"
				document.getElementById('ttl').innerHTML = "SendWithMe"
				document.getElementById('para1').innerHTML =
				`
				this was the Project i started working on july 2020, this
				project's aim is to provide chat functionality to users,
				it's much like a slack type chat room application this website
				has different rooms you can join and can chat with your peers
				and if the predefined rooms are not satisfactory, you can create
				your own rooms too.
				`
				document.getElementById('para2').innerHTML =
				`
				All you have to do in this website is to just make your user account
				and log in with that newly created account and you can begin to chat.
				`
				document.getElementById('social_img').src = "static/chat/chat.gif"
				document.getElementById('l1').innerHTML = "-Framework: Flask"
				document.getElementById('l2').innerHTML = "-BBC news API"
				document.getElementById('l3').innerHTML = "-gunicorn server"
				document.getElementById('l4').innerHTML = "-Bootstrap"
				document.getElementById('l5').innerHTML = "-Heroku"
				document.getElementById('l6').innerHTML = "-Ajax"
				document.getElementById('l7').innerHTML = "-Javascript"
				document.getElementById('l8').innerHTML = "-Socket.io"
				document.getElementById('l9').innerHTML = "-pbkdf2 for cryptography"
				document.getElementById('l10').innerHTML = "-python"
			}
			if (post == "2"){
				document.getElementById('1').src = "static/pizza/image-1.PNG"
				document.getElementById('2').src = "static/pizza/image-2.PNG"
				document.getElementById('3').src = "static/pizza/image-3.PNG"
				document.getElementById('4').src = "static/pizza/image-4.PNG"
				document.getElementById('5').src = "static/pizza/image-5.PNG"
				document.getElementById('6').src = "static/pizza/image-6.PNG"
				document.getElementById('7').src = "static/pizza/image-7.PNG"
				document.getElementById('8').src = "static/pizza/image-8.PNG"
				document.getElementById('9').src = "static/pizza/image-9.PNG"

				document.getElementById('about').innerHTML = "Phinnoccios' Pizza"
				document.getElementById('ttl').innerHTML = "Phinnoccios' Pizza"
				document.getElementById('para1').innerHTML =
				`
			    This Website droves it's data and inspiration from Phinnoccios' pizza a
			    restaurant which is a popular place in cambrigde near harvard
			    university campus. It is a E-commerce website.
			    You can shop for different dishes and varieties
			    of pizza and you can check out different combos and place order for the same.
			    This website is one of my focused projects. It took me several days to complete
			    this project.
				`
				document.getElementById('para2').innerHTML =
				`
	            You can enter all your information, your email , username and first name to
	            create an account on the website once your account is created you can directly
	            begin shopping with this e-commerce website and after placing an order you get
	            a confirmation email from this website, stating information reagrding your order.
				`
				document.getElementById('social_img').src = "static/pizza/pizzza.gif"
				document.getElementById('l1').innerHTML = "-Framework: Django"
				document.getElementById('l2').innerHTML = "-javascript"
				document.getElementById('l3').innerHTML = "-Postgres"
				document.getElementById('l4').innerHTML = "-Bootstrap"
				document.getElementById('l5').innerHTML = "-crispy_forms"
				document.getElementById('l6').innerHTML = "-Handlebars"
				document.getElementById('l7').innerHTML = "-Ajax"
				document.getElementById('l8').innerHTML = "-python"
			}
			if (post == "3"){
				document.getElementById('1').src = "static/book/image-1.PNG"
				document.getElementById('2').src = "static/book/image-2.PNG"
				document.getElementById('3').src = "static/book/image-3.PNG"
				document.getElementById('4').src = "static/book/image-4.PNG"
				document.getElementById('5').src = "static/book/image-5.PNG"
				document.getElementById('6').src = "static/book/image-6.PNG"
				document.getElementById('7').src = "static/book/image-7.PNG"
				document.getElementById('8').src = "static/book/image-8.PNG"
				document.getElementById('9').src = "static/book/image-9.PNG"

				document.getElementById('about').innerHTML = "Doro: a book review Website"
				document.getElementById('ttl').innerHTML = "Doro"
				document.getElementById('para1').innerHTML =
				`
				This Project was aimed at providing book review functionality,
				here you can review different kind of books, i've provided
				data of 4000+ books, you can rate the books on the scale of 1 to 5.
				This website draws it's inspiration form goodreads book review
				website.
				`
				document.getElementById('para2').innerHTML =
				`
				You can make your user account and on the basis of your tastes
				about books you can search the book by isbn, name, author, date
				and throw a review on book of your choosing.
				`
				document.getElementById('social_img').src = "static/book/book.gif"
				document.getElementById('l1').innerHTML = "-Framework: Flask"
				document.getElementById('l2').innerHTML = "-goodreads API"
				document.getElementById('l3').innerHTML = "-Postgres"
				document.getElementById('l4').innerHTML = "-javascript"
				document.getElementById('l5').innerHTML = "-python"
			}
		}