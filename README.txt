ANOTACOES SOBRE A APLICACAO:

	-- De Unzip no arquivo e o transfira os arquivos internos para uma pasta de mesmo nome(desafio_renda_fixa)

	-- Banco de dados:
		-- MongoDB - teste_db
		   -- collections: catalogo.
		   -- Para usar o db: use teste_db.
		   -- Para consultar o db db.catalogo.find()

			/* Inicializando o banco de dados */ 
		   -- Inicialize o MongoDB com o comando 'mongod' no terminal(cmd)
		   -- No terminal(cmd) entre na pasta onde o projeto foi baixado (C:\desafio_renda_fixa, por exemplo)
		   -- Para importar a collection: mongorestore --port <numero da porta> <backup_mongodb>
		   -- Digite o comando: 'mongod' no terminal para inicializar o banco de dados MongoDB
			
	/* Inicializando o servidor */
	-- BackEnd com flask:
		OBS: O servidor foi feito em Python 3.3
		-- Para rodar o servidor:

			-- No terminal(cmd), entre na pasta: 'servidor_flask'
			-- Digite o comando: 'python app.py' 

	-- FrontEnd com Angular:
		-- Entre na pasta <frontend_angular/aplicacao>
		-- (Com o node instalado) rode o comando <npm install> para instalar as dependencias
		-- Para inicializar a aplicacação Angular, rode o comando 'ng serve'(no terminal).-- Necessário, também, ter o Angular CLI instalado(npm install -g @agular/cli) 
