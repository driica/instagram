function Story(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.imagem}/>
      </div>
      <div class="usuario">{props.nome}</div>
    </div>
  );
}

export default function Stories() {
  const stories = [
    { nome: "9gag", imagem: "assets/img/9gag.svg" },
    { nome: "meowed", imagem: "assets/img/meowed.svg" },
    { nome: "noclaftech", imagem: "assets/img/noclaftech.jpg" },
    {
      nome: "nathanwpylestrangeplanet",
      imagem: "assets/img/nathanwpylestrangeplanet.svg",
    },
    { nome: "wawawicomics", imagem: "assets/img/wawawicomics.svg" },
    { nome: "respondeai", imagem: "assets/img/respondeai.svg" },
    { nome: "filomoderna", imagem: "assets/img/filomoderna.svg" },
    { nome: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg" },
  ];
  return (
    <div class="stories">
      {stories.map((storie) => (
        <Story nome={storie.nome} imagem={storie.imagem} />
      ))}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
