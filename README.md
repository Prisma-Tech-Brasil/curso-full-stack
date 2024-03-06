# 🧑‍💻 Aula 3

## Principais comandos em Bash

![reacao inicial dos alunos](https://i.pinimg.com/originals/f0/f0/d9/f0f0d932d6e39c7af5aa305cbd8da735.gif)


## ```pwd```

###### (print working directory)

Mostra o diretório onde você está.

```pwd```


## ```ls```

###### (list)

Lista todos os arquivos e pastas do diretório atual.

- como usar:
```ls```

- variações:
```ls -a```: lista diretórios e pastas escondidos (`hidden`)


## ```cd```

###### (change directory)

Muda de diretório.

```cd <diretório para onde você quer ir>```

- exemplo:

```cd gatos```: entra na pasta ```gatos``` que está dentro do diretório atual

- atalhos:

```cd ..```: Volta para o diretório parente na árvore de arquivos
```cd ~```: Vai para o diretório home

## ```cat```

###### (concatenate)

Mostra o conteúdo de um arquivo.

```cat <arquivo que você quer ver o conteúdo>```

- exemplo:

```cat gatos.txt```: imprime no terminal o conteúdo do arquivo ```gatos.txt```

- Fato interessante: o comando ```cat``` orininalmente foi feito para concatenar (juntar) dois ou mais arquivos de texto em um só, e posteriormente imprimir o resultado da concatenação. No entanto, caso o você passe apenas um arquivo para ele, ele apenas imprime o conteúdo do arquivo. Por isso, acabou ficando como o comando principal para imprimir o conteúdo de arquivos na tela em Bash.


## ```echo```

Imprime na tela.

```echo <o que você quer imprimir na tela>```

- exemplo:

```echo "Ola mundo!!!"```: imprime 'Ola mundo!!!' na tela

## ```history```

Imprime histórico de comandos na tela

```history```


## ```mkdir```

###### (make directory)

Cria um novo diretório (ou pasta)

```mkdir <nome do diretório que você quer criar>```

- exemplo:

```mkdir gatos```: cria um diretório chamado gatos no diretório atual


## ```touch```

Cria um novo diretório (ou pasta)

- Fato interessante: o comando ```touch``` (tocar) foi orignalmente criado no sistema operacional Unix para modificar arquivos que já existem, porém, caso você tente modificar um arquivo que não existe com este comando, ele criará o arquivo. Por isso, ele acabou se tornando o comando principal para criação de arquivos em Bash.

```mkdir <nome do diretório que você quer criar>```

- exemplo:

```touch gatos.txt```: cria um arquivo chamado ```gatos.txt```.


#### Descanse um pouco antes de prosseguir

![bonfire](https://i.redd.it/xte6gka2ghj91.gif)


## ```cp```

###### (copy)

Faz uma cópia de um arquivo ou diretório

```cp <nome do diretório ou arquivo que você quer copiar> <nome da cópia>```

- exemplo:

```cp gatos.txt felinos.txt```: cria um arquivo chamado ```felinos.txt```.


## ```mv```

###### (move)

Move um arquivo ou diretório para outro diretório

```mv <nome do diretório ou arquivo que você quer mover> <novo nome do arquivo>```

- exemplo:

```mv gatos.txt felinos.txt```: altera o nome de ```gatos.txt``` para ```felinos.txt```.


## ```rm```

###### (remove)

Remove um arquivo ou diretório

```rm <nome do arquivo que você quer remover>```

- exemplo:

```rm gatos.txt```: remove ```gatos.txt```.


## ```exit```

Finaliza a sessão no Bash.

```exit```


### Hacker Time

![hacker time](https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/v1/attachments/delivery/asset/28f4413b27e2d5142cb2cf412576b5be-1667002896/superpixelersanimation/create-a-custom-pixel-art-wallpaper-background.gif)

## Como instalar novos programas pelo terminal (no Ubuntu)

## ```apt```

```sudo apt install <nome do pacote>```

- instale o ```cmatrix```:

```sudo apt install cmatrix```

- rode o ```cmatrix```:

```cmatrix```
