import { useState, KeyboardEvent } from 'react';
import { Container } from './styles';

type Props = {
  onEnter: (taskName: string) => void;
};

export const InputArea = ({ onEnter }: Props) => {
  const [inputText, setInputText] = useState('');

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.code === 'Enter' || (e.code === 'NumpadEnter' && inputText !== '')) {
      onEnter(inputText);
      setInputText('');
    }
    console.log(e.code);
  };

  return (
    <Container>
      <div className="image">➕</div>
      <input
        type="text"
        placeholder="Adicione uma tarefa"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyUp={handleKeyUp}
      />
    </Container>
  );
};
