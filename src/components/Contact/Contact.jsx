import axios from 'axios';
import React, { useState } from 'react';
import { 
    FaRegAddressBook, 
    FaRegEnvelope, 
    FaRegUser, 
    FaRegMap 
} from 'react-icons/fa';
import './contact.css';


const Contact = () => {
    const [ form, setForm ] = useState({
        name: '', 
        email: '', 
        subject: '',
        message: '',
    })

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value })
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post(
            'https://sheet.best/api/sheets/4f7a5927-e249-4ee2-b83c-3a75f5f78fd7',
            form
        ).then((response) => {
            console.log(response);
            //Limpando formulario
            setForm({
                name: '', 
                email: '', 
                subject: '',
                message: ''
            });
        });
    }

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title text-cs">Contato</h2>
            <p className="section__subtitle">
                Venha <span>Falar comigo</span>
            </p>

            <div className="contact__container container grid">
                    <div className="contact__content">
                        <div className="contact__card">
                            <span className="contact__card--icon">
                                <FaRegMap />
                            </span>

                            <h3 className="contact__card--title">Endereço</h3>
                            <p className="contact__card--data">Rio de Janeiro / RJ</p>
                        </div>

                        <div className="contact__card">
                            <span className="contact__card--icon">
                                <FaRegUser />
                            </span>

                            <h3 className="contact__card--title">Freelance</h3>
                            <p className="contact__card--data">Disponível Agora</p>
                        </div>

                        <div className="contact__card">
                            <span className="contact__card--icon">
                                <FaRegEnvelope />
                            </span>

                            <h3 className="contact__card--title">Email</h3>
                            <p className="contact__card--data">bruno@gmail.com</p>
                        </div>

                        <div className="contact__card">
                            <span className="contact__card--icon">
                                <FaRegAddressBook />
                            </span>

                            <h3 className="contact__card--title">Telefone</h3>
                            <p className="contact__card--data">(21) 9999-9999</p>
                        </div>
                    </div>

                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__form--group grid">
                            <div className="contact__form--div">
                                <label className="contact__form--tag text-cs">Seu Nome e Sobrenome <b>*</b></label>
                                <input
                                    type="text" 
                                    name="name" 
                                    onChange={handleChange}
                                    value={form.name} 
                                    className="contact__form--input" 
                                />
                            </div>

                            <div className="contact__form--div">
                                <label className="contact__form--tag text-cs">Seu Endereço de Email <b>*</b></label>
                                <input 
                                    type="email"
                                    name="email" 
                                    onChange={handleChange}
                                    value={form.email}  
                                    className="contact__form--input" 
                                />
                            </div>
                        </div>

                        <div className="contact__form--div">
                            <label className="contact__form--tag text-cs">Seu Assunto <b>*</b></label>
                            <input 
                                type="text" 
                                name="subject" 
                                onChange={handleChange}
                                value={form.subject} 
                                className="contact__form--input" 
                            />
                        </div>

                        <div className="contact__form--div contact__form--area">
                            <label className="contact__form--tag text-cs">Sua Mensagem <b>*</b></label>
                            <textarea 
                                name="message" 
                                onChange={handleChange}
                                value={form.message} 
                                className="contact__form--input"
                            ></textarea>
                        </div> 

                        <div className="contact__submit">
                            <p>* Aceite os termos e condições.</p>
                            <button type="submit" className="btn text-cs">
                                Enviar Menssagem
                            </button>
                        </div>                  
                    </form>
            </div>

            <div className="section__deco deco__left"></div>
        </section>
    );
};

export default Contact;