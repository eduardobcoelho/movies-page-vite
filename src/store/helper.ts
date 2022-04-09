const mocks: any = {
  movies: [
    {
      name: 'Cães de Aluguel',
      sinopse: 'Criminoso reúne seis bandidos para grande roubo de diamantes.',
      year: 1992,
      imdb: 8.3,
      imdbLink: 'https://www.imdb.com/title/tt0105236/',
      actors: [
        {
          name: 'Quentin Tarantino',
          age: 59,
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlTrJvdxqSMBYf90USQe0qXEaMhXdy35FJOpUlEZ5PGl4wIBI',
          birthday: '27/03/1963',
        },
        {
          name: 'Tim Roth',
          birthday: '14/05/1961',
          photo:
            'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSh4JlBCQR0GBv8QAgpQ8GjVjEYcU2QMDFGaR2uOkLuhi792XYuRTzN0wmo_PiY',
          age: 60,
        },
        {
          name: 'Steve Buscemi',
          birthday: '13/12/1957',
          photo:
            'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQmKopVNGoxsTJ1DRo4jO1MvmuzprjylNr309oeqLtF44eVwK5Se5C0gCRpeolR',
          age: 64,
        },
      ],
      poster:
        'https://br.web.img3.acsta.net/pictures/15/03/19/17/47/301476.jpg',
      director: {
        name: 'Quentin Tarantino',
        age: 59,
        birthday: '27/03/1963',
      },
    },
    {
      name: 'Pulp fiction',
      sinopse:
        'Assassino que trabalha para a máfia se apaixona pela esposa de seu chefe quando é convidado a acompanhá-la.',
      year: 1994,
      imdb: 8.9,
      imdbLink: 'https://www.imdb.com/title/tt0110912/',
      actors: [
        {
          name: 'John Travolta',
          birthday: '18/02/1954',
          photo:
            'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/9/5/b/c/95bc924faa1c01f67178a89f6ca4e096.jpg',
          age: 68,
        },
        {
          name: 'Samuel L. Jackson',
          birthday: '21/12/1948',
          photo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg/1200px-Samuel_L._Jackson_2019_by_Glenn_Francis.jpg',
          age: 73,
        },
        {
          name: 'Maria de Medeiros',
          birthday: '19/08/1965',
          photo:
            'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRe22SUQs7ChJ5Ubn-RdMhJyIUvr_3Cn7oEv4XMRoTO6_TnfTfkLLhvq1kS9ZVb',
          age: 56,
        },
      ],
      poster:
        'https://img.elo7.com.br/product/original/268A58D/big-poster-filme-pulp-fiction-lo001-tamanho-90x60-cm-presente-geek.jpg',
      director: {
        name: 'Quentin Tarantino',
        age: 59,
        birthday: '27/03/1963',
      },
    },
    {
      name: 'Jackie Brown',
      sinopse:
        'Comissária de bordo trafica dinheiro a mando de um vendedor de armas. Quando dois policiais oferecem um acordo para que ela entregue o bandido, a mulher decide enganar todos os envolvidos, com um olho na liberdade e outro numa mala cheia de dinheiro.',
      year: 1997,
      imdb: 7.5,
      imdbLink: 'https://www.imdb.com/title/tt0119396/',
      actors: [
        {
          name: 'Pam Grier',
          birthday: '26/05/1949',
          photo:
            'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcS2UU-YcebgF3xhyYUUF1M5bgWuK7yMFx1qNtHfji40BVpnTHVKJ_7bff6MeMeg',
          age: 72,
        },
        {
          name: 'Samuel L. Jackson',
          birthday: '21/12/1948',
          photo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg/1200px-Samuel_L._Jackson_2019_by_Glenn_Francis.jpg',
          age: 73,
        },
        {
          name: 'Robert De Niro',
          birthday: '17/08/1943',
          photo:
            'http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcR2aRd9_XVbxomDCeA7fONe2EpTaw4yJgsSOo-5S_43PZsQoRv2hTrTqTji69Vp',
          age: 78,
        },
      ],
      poster:
        'https://br.web.img2.acsta.net/img/f7/33/f73356c5b68a632e95d5aa266c0f3b12.jpg',
      director: {
        name: 'Quentin Tarantino',
        age: 59,
        birthday: '27/03/1963',
      },
    },
    {
      name: 'Kill Bill: Volume 1',
      sinopse:
        'A ex-assassina conhecida apenas como "A Noiva" acorda de um coma de quatro anos decidida a se vingar de Bill, seu ex-amante e chefe, que tentou matá-la no dia do casamento.',
      year: 2003,
      imdb: 8.2,
      imdbLink: 'https://www.imdb.com/title/tt0266697/',
      actors: [
        {
          name: 'Uma Thurman',
          birthday: '29/04/1971',
          photo:
            'https://br.web.img3.acsta.net/pictures/19/08/29/21/14/0483094.jpg',
          age: 51,
        },
        {
          name: 'Lucy Liu',
          birthday: '02/12/1968',
          photo:
            'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQenncU4KPyySRZKGRj9jao6MlZ6WcI3k2kd8KyJ4Gga3yvxQpKhE5G1hsGlwsK',
          age: 53,
        },
        {
          name: 'Michael Madsen',
          birthday: '25/09/1957',
          photo:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ0-eFDys64AccHCm7s8vnoVwDFh95EFa56Gs2JPJAexGc_xNKb',
          age: 64,
        },
      ],
      poster:
        'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/6/068620140408-uau-posters-filmes-kill-bill-volume-1--kill-bill-vol-1-3.jpg',
      director: {
        name: 'Quentin Tarantino',
        age: 59,
        birthday: '27/03/1963',
      },
    },
    {
      name: 'Kill Bill: Volume 2',
      sinopse:
        'Noiva assassina é traída por antigo grupo e fica em coma por quatro anos. Quando acorda, procura vingança e mata seus companheiros um por um. Ao confrontar seu antigo mestre e amante, uma surpresa a espera.',
      year: 2004,
      imdb: 8.0,
      imdbLink: 'https://www.imdb.com/title/tt0378194/',
      actors: [
        {
          name: 'Uma Thurman',
          birthday: '29/04/1971',
          photo:
            'https://br.web.img3.acsta.net/pictures/19/08/29/21/14/0483094.jpg',
          age: 51,
        },
        {
          name: 'Lucy Liu',
          birthday: '02/12/1968',
          photo:
            'http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQenncU4KPyySRZKGRj9jao6MlZ6WcI3k2kd8KyJ4Gga3yvxQpKhE5G1hsGlwsK',
          age: 53,
        },
        {
          name: 'Michael Madsen',
          birthday: '25/09/1957',
          photo:
            'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ0-eFDys64AccHCm7s8vnoVwDFh95EFa56Gs2JPJAexGc_xNKb',
          age: 64,
        },
      ],
      poster:
        'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/6/167520140525-uau-posters-filmes-kill-bill-volume-2--kill-bill-vol-2-2-2.jpg',
      director: {
        name: 'Quentin Tarantino',
        age: 59,
        birthday: '27/03/1963',
      },
    },
    {
      name: 'À Prova de Morte',
      sinopse:
        'O dublê Mike é um profissional que gosta de levar mulheres inocentes para passeios de carro mortais em suas horas vagas.',
      year: 2007,
      imdb: 7.0,
      imdbLink: 'https://www.imdb.com/title/tt1028528/',
      actors: [
        {
          name: 'Kurt Russell',
          birthday: '17/03/1951',
          photo:
            'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR7iF152wZ9u1mZOEwsnOzXPbcP-AEmiHuGG9Q3vyyun_Hw5x9J-DoCiaJlgTsc',
          age: 71,
        },
        {
          name: 'Quentin Tarantino',
          birthday: '27/03/1963',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlTrJvdxqSMBYf90USQe0qXEaMhXdy35FJOpUlEZ5PGl4wIBI',
          age: 59,
        },
        {
          name: 'Zoë Bell',
          birthday: '17/11/1978',
          photo:
            'https://upload.wikimedia.org/wikipedia/commons/d/d5/Zo%C3%AB_Bell_07.jpg',
          age: 43,
        },
      ],
      poster: 'https://m.media-amazon.com/images/I/71t73NDu29L._AC_SL1000_.jpg',
      director: {
        name: 'Quentin Tarantino',
        age: 59,
        birthday: '27/03/1963',
      },
    },
    {
      name: 'Bastardos Inglórios',
      sinopse:
        'Durante a Segunda Guerra Mundial, na França, um grupo de judeus americanos conhecidos como Bastardos espalha o terror entre o terceiro Reich.',
      year: 2009,
      imdb: 8.3,
      imdbLink: 'https://www.imdb.com/title/tt0361748/',
      actors: [
        {
          name: 'Christoph Waltz',
          birthday: '04/09/1956',
          photo:
            'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcQMwzyxm368J2fXlDYvy3IcunsLwQrlKlPy76QvFIRNaObZgnWlYoYsSAFUaaWd',
          age: 65,
        },
        {
          name: 'Brad Pitt',
          birthday: '18/12/1963',
          photo:
            'https://conteudo.imguol.com.br/c/entretenimento/33/2022/01/05/brad-pitt-pode-estrelar-filme-sobre-formula-1-1641393478695_v2_3x4.jpg',
          age: 58,
        },
        {
          name: 'Eli Roth',
          birthday: '18/04/1972',
          photo:
            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRbTxGsFqhsnsCorXk6G3JodZngfmzO3uNdHJQ5ilYNpA24Yx9r',
          age: 49,
        },
      ],
      poster:
        'https://uauposters.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/5/157720140525-uau-posters-filmes-bastardos-inglorios--inglourious-basterds-5-2.jpg',
      director: {
        name: 'Quentin Tarantino',
        age: 59,
        birthday: '27/03/1963',
      },
    },
    {
      name: 'Django Livre',
      sinopse:
        'No sul dos Estados Unidos, o ex-escravo Django faz uma aliança inesperada com o caçador de recompensas Schultz para caçar os criminosos mais procurados do país e resgatar sua esposa.',
      year: 2012,
      imdb: 8.5,
      imdbLink: 'https://www.imdb.com/title/tt1853728/',
      actors: [
        {
          name: 'Jamie Foxx',
          birthday: '13/12/1967',
          photo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf6FGrcpWKJc-y8maa2E5u33sWL4KQXBV2FtNmaV9jfih5GJ0e',
          age: 54,
        },
        {
          name: 'Leonardo DiCaprio',
          birthday: '11/11/1974',
          photo:
            'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/92/61/22/20208787.jpg',
          age: 47,
        },
        {
          name: 'Samuel L. Jackson',
          birthday: '21/12/1948',
          photo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg/1200px-Samuel_L._Jackson_2019_by_Glenn_Francis.jpg',
          age: 73,
        },
      ],
      poster:
        'https://br.web.img2.acsta.net/medias/nmedia/18/90/07/53/20391069.jpg',
      director: {
        name: 'Quentin Tarantino',
        age: 59,
        birthday: '27/03/1963',
      },
    },
    {
      name: 'Os Oito Odiados',
      sinopse:
        'Em busca de abrigo para se proteger de uma nevasca, dois caçadores de recompensas, um prisioneiro e um homem que alega ser xerife conhecem quatro estranhos.',
      year: 2015,
      imdb: 7.8,
      imdbLink: 'https://www.imdb.com/title/tt3460252/',
      actors: [
        {
          name: 'Samuel L. Jackson',
          birthday: '21/12/1948',
          photo:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Samuel_L._Jackson_2019_by_Glenn_Francis.jpg/1200px-Samuel_L._Jackson_2019_by_Glenn_Francis.jpg',
          age: 73,
        },
        {
          name: 'Kurt Russell',
          birthday: '17/03/1951',
          photo:
            'http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcR7iF152wZ9u1mZOEwsnOzXPbcP-AEmiHuGG9Q3vyyun_Hw5x9J-DoCiaJlgTsc',
          age: 71,
        },
        {
          name: 'Jennifer Jason Leigh',
          birthday: '05/02/1962',
          photo:
            'http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRRqKOma4zQ56RYKooCyhVa7GbGwVBLWdmq7sfqOcevNM3iH7UUUyskFXq6tvui',
          age: 60,
        },
      ],
      poster:
        'https://img.elo7.com.br/product/zoom/2E955E1/big-poster-filme-os-oito-odiados-lo002-tamanho-90x60-cm-quadro.jpg',
      director: {
        name: 'Quentin Tarantino',
        age: 59,
        birthday: '27/03/1963',
      },
    },
    {
      name: 'Era uma Vez em... Hollywood',
      sinopse:
        'No final da década de 1960, Hollywood começa a se transformar e o astro de TV Rick Dalton e seu dublê Cliff Booth tentam acompanhar as mudanças.',
      year: 2019,
      imdb: 7.6,
      imdbLink: 'https://www.imdb.com/title/tt7131622/',
      actors: [
        {
          name: 'Leonardo DiCaprio',
          birthday: '11/11/1974',
          photo:
            'https://br.web.img2.acsta.net/c_310_420/medias/nmedia/18/92/61/22/20208787.jpg',
          age: 47,
        },
        {
          name: 'Brad Pitt',
          birthday: '18/12/1963',
          photo:
            'https://conteudo.imguol.com.br/c/entretenimento/33/2022/01/05/brad-pitt-pode-estrelar-filme-sobre-formula-1-1641393478695_v2_3x4.jpg',
          age: 58,
        },
        {
          name: 'Margot Robbie',
          birthday: '02/07/1990',
          photo:
            'https://s2.glbimg.com/UCoktuyzQCewvZTbRGXUHRB2Mzw=/top/e.glbimg.com/og/ed/f/original/2018/01/22/margot-robbie.jpg',
          age: 31,
        },
      ],
      poster:
        'https://i.pinimg.com/474x/fb/9e/18/fb9e18825c87a357a663bc7764165ace.jpg',
      director: {
        name: 'Quentin Tarantino',
        age: 59,
        birthday: '27/03/1963',
      },
    },
  ],
  directors: [
    {
      name: 'Quentin Tarantino',
      age: 59,
      birthday: '27/03/1963',
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxlTrJvdxqSMBYf90USQe0qXEaMhXdy35FJOpUlEZ5PGl4wIBI',
    },
  ],
}

export default mocks
