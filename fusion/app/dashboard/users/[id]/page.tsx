import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";
import Image from "next/image";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id} />
          <label>Nome</label>
          <input type="text" name="username" placeholder={user.username} />
          <label>Email</label>
          <input type="email" name="email" placeholder={user.email} />
          <label>Senha</label>
          <input type="password" name="password" />
          <label>Telefone</label>
          <input type="text" name="phone" placeholder={user.phone} />
          <label>Endereço</label>
          <textarea type="text" name="address" placeholder={user.address} />
          <label>É um Administrador?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Sim
            </option>
            <option value={false} selected={!user.isAdmin}>
              Não
            </option>
          </select>
          <label>Está ativo?</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Sim
            </option>
            <option value={false} selected={!user.isActive}>
              Não
            </option>
          </select>
          <button>Atualizar</button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
