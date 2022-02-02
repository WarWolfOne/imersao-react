import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import bg from './img/bg.jpg'

// biblioteca de estilo: Storybook

function GlobalStyle() {
    return (
      <style global jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          list-style: none;
        }
        body {
          font-family: 'Open Sans', sans-serif;
        }
        /* App fit Height */ 
        html, body, #__next {
          min-height: 100vh;
          display: flex;
          flex: 1;
        }
        #__next {
          flex: 1;
        }
        #__next > * {
          flex: 1;
        }
        /* ./App fit Height */ 
      `}</style>
    );
  }

function Titulo(props) {
    const Tag = props.tag || 'h1';
    return (
        <>
             <Tag>{props.children}</Tag>
             <style jsx> {`
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals[100]};
          background-color: ${appConfig.theme.colors.neutrals[700]};
          font-size: 24px;
          font-weight: 600;
        }
      `} </style>
        </>
       
         
    );
}

/* function HomePage() {
    return  (

    <div>
      <GlobalStyle />
       <Titulo tag="h2"> Olá Duelista. </Titulo> 
       <h2>Reino dos Duelistas</h2>
       <style jsx> {`
        h2 {
            color: silver;
        }
      `} </style>
    </div>
    )
  }
  export default HomePage */

export default function HomePage() {

  const username = 'WarWolf01';

  return (
    <>
      <GlobalStyle />
      <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundColor: appConfig.theme.colors.primary[100],
          backgroundImage: 'url(https://i.pinimg.com/564x/3b/4d/a7/3b4da7cc7ed9b46a39482358fcf4e739.jpg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover',
          // display flex = elementos filhos em linha,
        }}
        >
          <Box
          styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between', //espaço entre itens.
            flexDirection: {
              xs: 'column', // em coluna
              sm: 'row', //em linha
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
           backgroundColor: appConfig.theme.colors.neutrals[900],
          }}
          >
            {/*Formulario */}
            <Box
              as="form"
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, borderRadius: '5px', textAlign: 'center',
                backgroundColor: appConfig.theme.colors.neutrals[700],
              }}
            >
              <Titulo tag="h2">Reino dos Duelistas!</Titulo>
              <Text variant="body3" styleSheet={{marginBottom: '32px' , backgroundColor: appConfig.theme.colors.neutrals[700],
               color: appConfig.theme.colors.neutrals[400]}}>
                {appConfig.name}
            </Text>
            <TextField
              placeholder="Senha"
              styleSheet={{
                width: '90%', height: '40px', marginBottom: '32px'
              }}
              textFieldColors={{
                neutral: {
                  textColor: appConfig.theme.colors.neutrals[100],
                  mainColor: appConfig.theme.colors.neutrals[700],
                  mainColorHighlight: appConfig.theme.colors.primary[100],
                  backgroundColor: appConfig.theme.colors.neutrals[500]
                }
              }}
            />
            <Button
              type='submit'
              label='Entrar'
              styleSheet={{
                width: '90%', height: '40px',  marginBottom: '32px',
              }}
              buttonColors={{
                contrastColor: appConfig.theme.colors.neutrals["000"],
                mainColor: appConfig.theme.colors.primary[100],
                mainColorStrong: appConfig.theme.colors.primary[300] // quando o mouse esta em cima.
              }}
            />
            </Box>
            {/*Foto */}
            <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[700],
              border: '1px solid',
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
          >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src="https://i.pinimg.com/564x/79/db/eb/79dbeb599d07eafa7972158b959bfad7.jpg"
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[100],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '4px 10px',
                borderRadius: '16px'
              }}
            >
              {username}
            </Text>
          </Box>
          </Box>
      </Box>
    </>
  );

}