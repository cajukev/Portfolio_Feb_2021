import styled, { css } from 'styled-components'

const startText = (props) => {
  return (
    <div>
      <FunnyText space={props.space}>
        {textObject[props.state[0]][props.state[1]].text}
      </FunnyText>
    </div>
  );
}

const textObject = [
  [//State 0
    {"text":"The choice is yours"} //State 0
  ],
  [//State 1
    {"text":"State 1.0"}, //State 1.0
    {"text":"State 1.1"}, //State 1.1
    {"text":"State 1.2"} //State 1.2
  ],
  [//State 2
    {"text":"State 2.0"}, //State 2.0
    {"text":"State 2.1"}, //State 2.1
    {"text":"State 2.2"} //State 2.2
  ],
  [//State 3
    {"text":"State 3.0"}, //State 3.0
    {"text":"State 3.1"}, //State 3.1
    {"text":"State 3.2"} //State 3.2
  ],
  [//Change page
    {"text":"change page"}
  ]
]

const FunnyText = styled.p`
  width:100%;
  text-align:center;
  color:var(--fontColor);
  margin-top:${props => props.space};
  font-family:var(--bodyFont);
  font-weight:700;
`

export default startText;
