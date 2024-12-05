# CRUD de productos con react
Aplicación de consumo de API con React. Para este proyecto se ha utilizado el hook de react llamado ``useContext`` esto con la finalidad de manejar estados complejos en las aplicaciones.

## ¿Por qué useContext y no useState?
La razón por la cual se ha utilizado ``useContext`` es porque proporciona un contexto del componente principal y es el que se encarga unicamente de manejar los estados, a esto se le conoce como API Context. Además al crear un contexto para cada funcion o estado se pueden implementar hooks predefinidos que se pueden usar en otra parte de la aplicación. La aplicación creada en este proyecto tiene la siguiente jeraquía:

```bash
{ catalogo.jsx }
|-----CatalogProvider
    |-------ModalEditProduct  
    |-------ModalDeleteProduct
    |-------ProductsGrid
```
Para que los tres componentes hijo no tengan que pasarse parametros entre si, el componente ``CatalogProvider`` da un contexto de los estados que posee, asi cualquier componente puede consultar o realizar una acción sin depender de los parametros de otro componente.


# Configurar e iniciar proyecto
En este proyecto se ha utilizado vite para crear el proyecto, debido a que cuenta con varios atajos.

* Instalar dependencias:
    ```bash
    npm install
    ```

* Correr proyecto en modo desarrollador:
    ```bash
    npm run dev
    ```

* Presiona ``o + Enter`` en la consola para abrir el proyecto en tu navegador por defecto
