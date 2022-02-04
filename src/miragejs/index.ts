import { createContext, ReactNode, useContext, useEffect, useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { updateClassDeclaration } from 'typescript';
import { api } from '../services/api';
import { Product, Stock } from '../types';

import { createServer } from 'miragejs';

export default function () {
    createServer({
      routes() {
        this.get("/api/reminders", () => ({
          reminders: [],
        }))
      },
    })
  }
