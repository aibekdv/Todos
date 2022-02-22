import React from "react";
import { Link } from "react-router-dom";

export const AboutPage: React.FC = () => {
  return (
    <div className="mt-2">
      <h2>Информация</h2>
      <p>
        Блокнот Онлайн - это бесплатный текстовый редактор на основе браузера,
        который позволяет запсиать список дел в
        вашем браузере. Не требуется регистрация и вход.
      </p>
      <Link to="/" className="waves-effect waves-light btn indigo">
        <i className="material-icons left">arrow_back</i>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};
