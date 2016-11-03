package punto1;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.Scanner;

public class Main {

	public static void menu() {
		System.out.println("Bienvenido a Agate");

		System.out.println("1) Listar clientes");
		System.out.println("2) Proyectos");
		System.out.println("3) Personal");
		System.out.println("4) Ingresar nota (solo personal creativo)");
		System.out.println("5) Ver notas");
		System.out.println("6) Salir");

	}

	public static void menuProyectos() {
		System.out.println("Proyectos");
		System.out.println("1) Informacion contable");
		System.out.println("2) Cambiar fechas");
		System.out.println("3) Estado de la campaña");// Avance

	}

	public static void menuPersonal() {
		System.out.println("Personal");
		System.out.println("1) Listar personal");
		System.out.println("2) Listar personal activo");
		System.out.println("3) Listar personal por area");
		System.out.println("4) Salarios por cargo");
		System.out.println("5) Calcular incentivo");
	}

	public static void main(String[] args) {

		Empresa agate = new Empresa();
		int seleccion;
		agate.test();
		Scanner entrada = new Scanner(System.in);
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		System.out.println();
		while (true) {
			menu();
			seleccion = entrada.nextInt();
			switch (seleccion) {
			case 1:
				agate.registrarClientes();
				break;
			case 2:
				Proyecto temp;
				System.out.println("Seleccione el proyecto");
				agate.verProyectos();
				seleccion = entrada.nextInt();
				temp = agate.seleccionarProyecto(seleccion);
				
				System.out.println("Seleccione la accion a realizar");
				menuProyectos();
				seleccion = entrada.nextInt();
				String cfecha = null;
				switch(seleccion){				
				case 1:
					System.out.println(temp.getCostoTotal().toString());
					break;
				case 2:
					try {
						System.out.println("\ningrese la nueva fecha ");						
						cfecha = br.readLine();
						System.out.println("La nueva fecha de la campaña es "+ cfecha);
					} catch (IOException e1) {
						// TODO Auto-generated catch block
						e1.printStackTrace();
					}
					break;
				case 3:
					System.out.println("El avance de la campaña es de "+temp.getGradoFinalizacion()+"%");
					break;
				default:
					
				}
				
				break;
			case 3:
				menuPersonal();
				seleccion = entrada.nextInt();
				switch (seleccion) {
				case 1:
					agate.listarPersonal();
					break;
				case 2:
					agate.estaEnProyeto();
					break;
				case 3:
					agate.enArea();
					break;
				case 4:
					agate.salarioCargo();
					break;
				case 5:
					agate.calcularIncentivo();
				}
				break;
			case 4:
				String nombre = null;
				String nota = null;
				try {
					System.out.println("Ingrese su nombre");
					nombre = br.readLine();
					Personal temp2 = agate.buscarMiembro(nombre);
					if(temp2.getArea() == "Creativo"){
						System.out.println("Ingrese la nota.");
						nota = br.readLine();
						agate.agregarNota(temp2, nota);
					}else{
						System.out.println("El usuario no pertenece al personal creativo.");
					}
				} catch (IOException e) {
					// TODO Auto-generated catch block
					e.printStackTrace();
				}				
				
				break;
			case 5:
				agate.imprimirNotas();
				break;
			case 6:
				System.out.println("Gracias por utilizar nuestro servicio.");
				System.exit(0);
				break;
				
			default:

			}
		}
	}
}
