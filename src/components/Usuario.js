import { useState } from "react";

export default function Usuario(props) {
  const [nomeUsuario, setNomeUsuario] = useState(props.nomeUsuario);
  const [fotoUsuario, setFotoUsuario] = useState(props.imagem);

  function mudaNome() {
    const novoNome = prompt("Insira o novo nome de usuário");
    if (!novoNome) {
      alert("Nome de usuário inválido");
    } else {
      setNomeUsuario(novoNome);
    }
  }

  function mudaFoto() {
    const novaFoto = prompt("Insira o link da nova foto de perfil");
    if (!novaFoto) {
      alert("Link de foto inválido");
    } else {
      setFotoUsuario(novaFoto);
    }
  }
  return (
    <div class="usuario" data-test="user">
      <img src={fotoUsuario} onClick={mudaFoto} data-test="profile-image"/>
      <div class="texto">
        <strong>{props.usuario}</strong>
        <span data-test="name">
          {nomeUsuario}
          <ion-icon onClick={mudaNome} name="pencil" data-test="edit-name"></ion-icon>
        </span>
      </div>
    </div>
  );
}
