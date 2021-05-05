package com.company;
import java.lang.System.*;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        int[] nums = {1,5,3,2,7,8, 4, 45,123,2,4,78};
        int[] result = insertionSort(nums);
        System.out.print(Arrays.toString(result));

    }

    public static int[] bubbleSort (int[] arr) {
        int n = arr.length;
        for(int i = 0; i< n -1; i++) {
            for(int j = 0; j < n -i -1; j++) {
                if(arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        return arr;
    }

    public static int[] insertionSort(int[] list) {
        int i,j, current;
        for(i = 1; i<list.length-1; i++) {
            current = list[i];
            j=i-1;
            while(j >= 0 && list[j] > current) {
                list[j] = list[j+1];
                j--;
            }
            current = list[j+1];
        }
        return list;
    }
}





