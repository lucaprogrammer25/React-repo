const UncontrolledLogin = () => {
    const handleFormSubmit = (event) => {
      event.preventDefault();
  
      const formData = new FormData(event.target);
  
      const data = {
        form: formData.get("form"),
        username: formData.get("username"),
        password: formData.get("password"),
      };
  
      console.log(data);
    };
  
    return (
      <form name="form" onSubmit={handleFormSubmit}>
        <input name="username" />
        <input name="password" type="password" />
        <input name="remember" type="checkbox" />
        <button>Login</button>
        <button type="reset">Reset</button>
      </form>
    );
  };
  
  export default UncontrolledLogin;



/*Utilizzando la forma standard con il FormData API i vantaggi sono che :
avremo un modo semplice e intuitivo per raccogliere i dati di un modulo, gestire automaticamente i file e gli oggetti complessi (ad esempio, array o oggetti annidati),
questa forma è supportata da tutti i browser moderni.

Svantaggi:
La FormData API è  progettata per la raccolta di dati dai moduli HTML. Se devi raccogliere dati da fonti diverse, come oggetti JavaScript o API REST, 
allora FormData non è l'opzione appropriata.
 Per utilizzarlo, devi avere un riferimento al form HTML stesso.
Non supporta dati personalizzati o strutture più complesse (ad esempio, oggetti JSON annidati).