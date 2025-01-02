import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker'
import "react-day-picker/style.css";
import styled from 'styled-components';
import { theme } from '../theme';
import { useState } from 'react';

const ContenedorInput = styled.div`
	position: relative;

	input {
		font-family: 'Work Sans', sans-serif;
		box-sizing: border-box;
		background: ${theme.grisClaro};
		border: none;
		cursor: pointer;
		border-radius: 0.625rem; /* 10px */
		height: 5rem; /* 80px */
		width: 100%;
		padding: 0 1.25rem; /* 20px */
		font-size: 1.5rem; /* 24px */
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		outline: none;
	}

	.rdp {
		position: absolute;
	}

	.rdp-months {
		display: flex;
		justify-content: center;
	}

	.rdp-month {
		background: #fff;
		box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
		padding: 20px;
		border-radius: 10px;
	}

	@media (max-width: 60rem) {
		/* 950px */
		& > * {
			width: 100%;
		}
	}
`;

interface DatePickerProps {
  fech: Date,
  setFech: (date: Date)=>void
}

interface formatFechProps {
  fech: Date
}

const formatFech = ({fech}: formatFechProps): string => {
  return format(fech, `dd 'de' MMMM 'de' yyyy`, {locale: es})
}

export const DatePicker = ({fech, setFech}: DatePickerProps) => {

  const [visible, setVisible] = useState(false)

  return (
    <ContenedorInput>
      <input type="text" readOnly value={formatFech({fech})} onClick={()=>setVisible(!visible)}/>
      {
        visible && 
          <DayPicker 
            mode='single'
            selected={fech}
            onSelect={setFech}
            locale={es}
            required
          />
      }
    </ContenedorInput>
  )
}