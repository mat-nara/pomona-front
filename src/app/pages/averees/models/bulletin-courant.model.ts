// Table data
export interface TableBulletin {
    matricule: number;
    statut: string;
    contrat: number;
    bulletin: number;
    categorie: string;
    libelle: string;
    t1: string;
    m1: string;
    t2: string;
    m2: string;
  }
  
  // Search Data
  export interface SearchResultBulletin {
    tables: TableBulletin[];
    total: number;
  }
  