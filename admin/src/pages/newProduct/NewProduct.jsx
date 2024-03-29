import "./newProduct.css";
import { useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { addProduct } from "../../redux/apiCalls";
import { useDispatch } from "react-redux";


export default function NewProduct() {
  const [inputs,setInputs] = useState({})
  const [file,setFile] = useState({})
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = { ...inputs, img: downloadURL };
          addProduct(product, dispatch);
        });
      }
    );
  };

  console.log(inputs);

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">Novo produto</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input
            type="file"
            id="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </div>
        <div className="addProductItem">
          <label>Nome</label>
          <input
            name="tittle"
            type="text"
            placeholder="Adidas"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Descrição</label>
          <input
            name="desc"
            type="text"
            placeholder="descrição..."
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Marca</label>
          <input
            name="brand"
            type="text"
            placeholder="Darkness"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Tipo</label>
          <input
            name="type"
            type="text"
            placeholder="Calça"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Preço</label>
          <input
            name="price"
            type="number"
            placeholder="100"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Categoria</label>
          <select name="category" onChange={handleChange}>
            <option value="roupas">Roupas</option>
            <option value="acessorios">Acessorios</option>
            <option value="consumiveis">Consumiveis</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select name="inStock" onChange={handleChange}>
            <option value="true">Sim</option>
            <option value="false">Não</option>
          </select>
        </div>
        <button onClick={handleClick} className="addProductButton" >
          Criar 
        </button>
      </form>
    </div>
  );
}
