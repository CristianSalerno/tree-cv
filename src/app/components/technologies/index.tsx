import React from 'react';
import { technologies } from '../../utils/utils';
import IconReact from '../../assets/icons/IconReact';
import IconRedux from '../../assets/icons/IconRedux';
import IconPlaywright from '../../assets/icons/IconPlaywright';
import IconTypescript from '../../assets/icons/IconTypescript';
import IconNode from '../../assets/icons/IconNode';
import IconJest from '../../assets/icons/IconJest';
import IconJavascript from '../../assets/icons/IconJavascript';
import IconLogoAngular from '../../assets/icons/IconAngular';
import IconPostgresql from '../../assets/icons/IconSql';
import IconBackbone from '../../assets/icons/IconBackbone';
import IconStencil from '../../assets/icons/IconStencil';
import './styles.css';

interface ITechnology {
  name: string,
  icon: string
}

export default function Technologies() {
  const icons = {
    'Javascript': <IconJavascript width={40} height={40} />,
    'Typescript': <IconTypescript width={40} height={40} />,
    'React': <IconReact width={40} height={40} />,
    'Redux': <IconRedux width={40} height={40} />,
    'Angular': <IconLogoAngular width={40} height={40} />,
    'Sql': <IconPostgresql width={40} height={40} />,
    'BackboneJs': <IconBackbone width={40} height={40} />,
    'Playwright': <IconPlaywright width={40} height={40} />,
    'NodeJs': <IconNode width={40} height={40} />,
    'Jest': <IconJest width={40} height={40} />,
    'StencilJs': <IconStencil width={40} height={40} />,
  };

  return (
    <div>
      <h3 className='text-lg mb-1 mt-3 mb-5'>Technologies</h3>
      <div className='slider'>
        <div className='slide-track'>
          {
            technologies.concat(technologies).map((tech: ITechnology, index: number) => (
              <div key={index} className='slide ml-5'>
                <div>{icons[tech.icon]}</div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}
