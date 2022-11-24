// Table data
export interface TableMensuelle {
    matricule: string;
    libelle: string;
    pm: number;
    pm_1: number;
    pm_2: string;
    pm_3: number;
    pm_4: number;
    pm_5: number;
  }
  
  // Search Data
  export interface SearchResultMensuelle {
    tables: TableMensuelle[];
    total: number;
  }
  