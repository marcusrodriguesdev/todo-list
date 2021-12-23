import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

type HandleText = {
  onEnter: (taskName: string) => void
};

export const AddArea = ({ onEnter }: HandleText) => {
  const [inputText, setInputText] = useState(''); 

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' && inputText !== '') {
       onEnter(inputText);
       setInputText('');
    }
  }

  return (
    <C.Container>
      <div className="image">➕</div>
      <input
        value={inputText}
        type="text"
        placeholder="Adicione uma tarefa"
        onChange={ ({ target }) => setInputText(target.value) }
        onKeyUp={handleKeyUp}
      />
    </C.Container>
  );
}