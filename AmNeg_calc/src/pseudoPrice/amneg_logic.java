package pseudoPrice;

import java.util.ArrayList;

public class amneg_logic {

	public ArrayList<double[]> amneg_find( ArrayList<double[]> prc_diff) {
		// add logic here to calculate the amneg 
		//System.out.println("gooot a job :"+prc_diff.get(0)[1]);
		ArrayList<Double> prc_concecative_neg = new ArrayList<Double>();
		
		/*for (int i = 0; i < prc_diff.size(); i++) {
			if(prc_diff.get(i)[0]<0){
				prc_concecative_neg.add(prc_diff.get(i)[0]);
				for (int j = i+1; j < j+8; j++) {
					if(j<=i){
						double a1_a2 = prc_diff.get(j-1)[0]+prc_diff.get(j)[0];
						if(a1)
					}
				}
			}
		}*/
		
		return prc_diff;
	}
}
