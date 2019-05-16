<template>
    <div class="col-lg-12" style="padding: 0 !important;">
            <div class="row row-grid list-party">
              <div v-for="item in items" :key="item.id" class="col-lg-4">
                <div class="card card-lift--hover shadow border-0">
                  <div class="card-body py-3">
                    <div class="icon icon-shape icon-shape-primary rounded-circle mb-4">
                      <i class="ni ni-sound-wave"></i>
                    </div>
                    <h6 class="text-primary text-uppercase">{{item.title}}</h6>
                    <p class="description mt-3">{{item.message}}</p>
                    <h5 class="description mt-3">{{item.adress}}</h5>
                    <div>
                      <span class="badge badge-pill badge-primary">{{item.style}}</span>                 
                    </div>
                    <a href="#" class="btn btn-primary mt-4">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
    </div>        
</template>

<script>
export default {
    name: "Party",
    props: {
    msg: {
      type: String
    }
  },
  data: function() {
    return {
      items: [
      { id:"1",
        title: "I Love Techno",
        message: 'I Love Techno, parfois appelé ILT, est un festival de musique électronique créé en 1995 par Peter Decuypere et Herman Schueremans.',
        lieu: 'Flanders Expo',
        adress: 'Rue du Flanders 32',
        style: 'eletro'},
      { id:"2",
        title: "Ibrahim Maalouf Evening",
        message: 'Ibrahim Maalouf, né le 5 novembre 1980 à Beyrouth, au Liban, est un trompettiste franco-libanais, également compositeur.',
        lieu: 'L\'Archiduc',
        adress: 'Rue Antoine Dansaert 6, 1000',
        style: 'jazz'},
      { id:"3",
        title: "Angèle",
        message: 'Elle est la grande gagnante de la 8e édition des Red Bull Elektropedia Awards 2018 où elle a remporté les prix ‘Artist of the Year’, ‘Best Song’',
        lieu: 'Palais 12',
        adress: 'Avenue de Miramar, 1020 Bruxelles',
        style: 'pop'},
      { id:"4",
        title: "Angèle",
        message: 'Elle est la grande gagnante de la 8e édition des Red Bull Elektropedia Awards 2018 où elle a remporté les prix ‘Artist of the Year’, ‘Best Song’',
        lieu: 'Palais 12',
        adress: 'Avenue de Miramar, 1020 Bruxelles',
        style: 'pop'}
    ]
    };
  }
}
</script>

<style>
.list-party{
    overflow-x:auto;
    display: -webkit-inline-box;
    padding-top: 25px;
    padding-bottom: 25px;
}

</style>

