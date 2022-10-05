import React, { useEffect, useRef, useState } from 'react';
import './button.scss';
import { MdPlayForWork as EnterIcon } from 'react-icons/md';
import {
  BsPlayCircleFill as PlayIconCircleFill,
  BsPlayFill as PlayIconFill,
} from 'react-icons/bs';
import {
  FiPlay as PlayIconOutlined,
  FiPlayCircle as PlayIconCircleOutlined,
} from 'react-icons/fi';

interface Props {
  clickHandler?: string;
  clean: boolean;
  circular: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<Props> = ({ clickHandler, clean, circular, children }) => {
  return (
    <div className={clean ? 'btn clean full' : 'btn stylish full'}>
      <span>{children}</span>
      <div className={'icon'}>
        <i className="play outlined">
          {circular ? <PlayIconCircleOutlined /> : <PlayIconOutlined />}
        </i>
        <i className={'play fill'}>
          {circular ? <PlayIconCircleFill /> : <PlayIconFill />}
        </i>
      </div>
    </div>
  );
};

interface Props2 {
  clickHandler?: string;
  children: React.ReactNode;
}

export const OutlinedButton: React.FC<Props2> = ({ clickHandler }) => {
  return (
    <div className="btn min">
      <span>Trailer</span>
      <div className={'icon'}>
        <i className={'play outlined'}>
          <EnterIcon />
        </i>
        <i className={'play fill'}>
          <EnterIcon />
        </i>
      </div>
    </div>
  );
};

export const SubmitButton: React.FC = () => {
  return (
    <div>
      <div></div>
    </div>
  );
};
