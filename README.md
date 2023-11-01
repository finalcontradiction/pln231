# Receitas Brasileiras

![GitHub repo size](https://img.shields.io/github/repo-size/finalcontradiction/pln231?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/finalcontradiction/pln231?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/finalcontradiction/pln231?style=for-the-badge)
![Bitbucket open issues](https://img.shields.io/bitbucket/issues/finalcontradiction/pln231?style=for-the-badge)
![Bitbucket open pull requests](https://img.shields.io/bitbucket/pr-raw/finalcontradiction/pln231?style=for-the-badge)

<img src="/sistema.png" alt="Exemplo imagem">

> Gerador de receitas com IA. <br>
> A partir de uma aplicação Django e API do ChatGPT, tomando como ponto de partida [este material](https://www.geeksforgeeks.org/how-to-implement-chatgpt-in-django/), este projeto tem como objetivo ser um gerador de receitas de fácil utilização para sugerir opções ao usuário com base em: regiões brasileiras, época do ano, tempo de preparo, tipo de prato, ingredientes e como estes participam na receita.

## 💻 Pré-requisitos

Antes de começar, é necessário instalar:
* Os pacotes de Python
```
sudo apt-get install python
```
* Os pacotes do Django
```
python3 -m pip install Django
```
```
pip3 install djangorestframework
```

## 🚀 Instalando o projeto

Para instalar o projeto, siga estas etapas:

Clone o repositório:
```
git clone https://github.com/finalcontradiction/pln231.git
```

Insira sua chave da OpenAI - que pode ser obtida em seu site - na variável `openai.api_key` no arquivo `view.py` como mostra na figura 
<img src="/chave.png" alt="Exemplo imagem">

Iniciando o Back-end:
```
python3 pln231/pln231/manage.py runserver
```

Acesse o endreço local `127.0.0.1:8000/pln231` pelo seu navegador para interagir com o sistema.

## ☕ Usando o sistema

No navegador, escolha as opções desejadas para a sua receita entre as selecionáveis: Região, estação, tipo e como os ingredientes participam na receita. <br>
Nos campos de escrita, em ingredientes, siga o exemplo e coloque-os entre vírgulas. Em duração de preparo, coloque o tempo máximo ("até 30 minutos") ou intervalos temporais ("entre 20 e 40 minutos").

## 😄 Esperamos que façam um bom uso da feramenta
