import Phonebook from './Phonebook/Phonebook.jsx'

export const App = ({children}) => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Phonebook />
      {children}
    </div>
  );
};
