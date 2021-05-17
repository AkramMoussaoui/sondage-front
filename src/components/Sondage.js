import axios from "axios";
import { useState, useEffect } from "react";
import { Card } from "antd";
const Sondage = () => {
  const [error, setError] = useState(false);
  const [sondages, setSondages] = useState();
  const getSondage = async () => {
    try {
      const reponse = await axios.get("https://soudage.herokuapp.com/sondage", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      setSondages(reponse.data);
    } catch (error) {
      setError(true);
    }
  };
  useEffect(() => {
    getSondage();
  }, []);
  return (
    <div>
      {error
        ? "not authorized"
        : sondages &&
          sondages.map((sondage) => {
            return (
              <Card title={sondage.sujet}>
                {sondage.questions.map((question) => {
                  return (
                    <div>
                      <h5>{question.texte}</h5>
                      <ul>
                        {question.choix.map((choi) => {
                          return <li>{choi}</li>;
                        })}
                      </ul>
                    </div>
                  );
                })}
              </Card>
            );
          })}
    </div>
  );
};

export default Sondage;
