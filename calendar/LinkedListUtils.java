


import java.util.LinkedList;
import java.text.Collator;
import java.util.*;

/*
 * SD2x Homework #1
 * Implement the methods below according to the specification in the assignment description.
 * Please be sure not to change the signature of any of the methods!
 */

public class LinkedListUtils {
	
	public static void insertSorted(LinkedList<Integer> list, int value) {

		int index = 0;
		
		if(list.size() == 0){
			list.add(value);
			return;
		}
		
		while(list.get(index) < value) {
			
			if(index == list.size()-1) {
				list.add(value);
				return;
			}
			
			index++;
		}
		
		list.add(index, value);
		
	}
	

	public static void removeMaximumValues(LinkedList<String> list, int N) {

		
		Collections.sort(list, new Comparator<String>() {
		     @Override
		     public int compare(String o1, String o2) {
		         return Collator.getInstance().compare(o1, o2);
		     }
		 });
		
		int start = list.size() - N;
		
		while(start != list.size()) {
			list.remove(start);
		}
		
	}
	
	public static boolean containsSubsequence(LinkedList<Integer> one, LinkedList<Integer> two) {

		
		for(int i=0; i<one.size(); i++) {
			int sublength = 0;
			
			for(int j=0; j<two.size(); j++) {
				if(one.get(i+j) == two.get(j)) {
					sublength++;
				} else {
					break;
				}
			}
			
			if(sublength == two.size())
				return true;
		}
		return false; 	}
 
}
