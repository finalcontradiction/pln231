from django.shortcuts import render

import json 

# Create your views here.

from django.http import JsonResponse 
import openai 
  
openai.api_key = 'key'
  
def get_completion(prompt): 
    print(prompt) 
    query = openai.Completion.create( 
        engine="text-davinci-003", 
        prompt=prompt, 
        max_tokens=1024, 
        n=1, 
        stop=None, 
        temperature=0.5, 
    ) 
  
    response = query.choices[0].text 
    print(response) 
    return response 
  
  
def query_view(request): 
    if request.method == 'POST': 
        tipo = request.POST.get('tipo')
        tempo = request.POST.get('tempo')
        ingr = request.POST.get('ingr')
        estacao = request.POST.get('estacao')
        regiao = request.POST.get('regiao')
        instrIngr = request.POST.get('instrIngr')
        response = get_completion(gen_prompt(tipo, tempo, ingr, estacao, regiao, instrIngr))
        print(response)
        response_dict = json.loads(response)
        return JsonResponse(response_dict, safe=False)
    return render(request, 'index.html')

def gen_prompt(tipo, tempo, ingr, estacao, regiao, instrIngr):
    return "Preciso de receita tipica da região ```"+regiao+"``` do Brasil ```"+estacao+"```"+"\
            Formate a resposta como um JSON com atributos title,\
            description, prep_time, cook_time, ingredients, directions.\
            O tipo de receita esta entre os delimitadores abaixo \
            tipo de receita: ```" + tipo +"```.\
            O tempo de preparo da receita deve ser proximo do que esta entre os delimitadores a seguir\
            tempo medio de preparo: ```" + tempo + "```\
            Utilize ```"+instrIngr+"``` delimitados a seguir\
            ingredientes: ```" + ingr + "```.\
            Se nao gerar receitas, retorne um JSON com os campos vazios."
